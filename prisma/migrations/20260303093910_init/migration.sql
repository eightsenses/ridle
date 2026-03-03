-- CreateEnum
CREATE TYPE "FollowStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED');

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "supabaseUserId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "displayName" TEXT,
    "thumbnailImageUrl" TEXT,
    "surfHistoryYears" INTEGER,
    "bio" TEXT,
    "snsInsta" TEXT,
    "snsFacebook" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Follow" (
    "id" SERIAL NOT NULL,
    "followerProfileId" INTEGER NOT NULL,
    "followeeProfileId" INTEGER NOT NULL,
    "status" "FollowStatus",
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "respondedAt" TIMESTAMP(3),

    CONSTRAINT "Follow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "senderProfileId" INTEGER NOT NULL,
    "receiverProfileId" INTEGER NOT NULL,
    "body" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "readAt" TIMESTAMP(3),

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Goal" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "month" TIMESTAMP(3) NOT NULL,
    "targetHours" INTEGER,
    "targetRides" INTEGER,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Goal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "spotId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "surfTimeMinutes" INTEGER NOT NULL,
    "rideCount" INTEGER NOT NULL,
    "challengeNote" TEXT,
    "thumbnailImageUrl" TEXT,
    "ratings" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSpot" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "spotId" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "orderIndex" INTEGER NOT NULL,

    CONSTRAINT "UserSpot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Area" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "prefectureCode" TEXT NOT NULL,

    CONSTRAINT "Area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spot" (
    "id" SERIAL NOT NULL,
    "areaId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lon" DOUBLE PRECISION NOT NULL,
    "orientation" TEXT NOT NULL,
    "notes" TEXT,

    CONSTRAINT "Spot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SpotReport" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "spotId" INTEGER NOT NULL,
    "observedAt" TIMESTAMP(3) NOT NULL,
    "comment" TEXT NOT NULL,
    "waveSize" TEXT NOT NULL,
    "face" TEXT NOT NULL,
    "wind" TEXT NOT NULL,
    "windDir" TEXT NOT NULL,
    "windSpeed" INTEGER NOT NULL,
    "waterTemp" INTEGER NOT NULL,
    "airTemp" INTEGER NOT NULL,
    "tidePhase" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SpotReport_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_supabaseUserId_key" ON "Profile"("supabaseUserId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userName_key" ON "Profile"("userName");

-- CreateIndex
CREATE INDEX "Follow_followeeProfileId_idx" ON "Follow"("followeeProfileId");

-- CreateIndex
CREATE INDEX "Follow_followerProfileId_idx" ON "Follow"("followerProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "Follow_followerProfileId_followeeProfileId_key" ON "Follow"("followerProfileId", "followeeProfileId");

-- CreateIndex
CREATE INDEX "Message_senderProfileId_idx" ON "Message"("senderProfileId");

-- CreateIndex
CREATE INDEX "Message_receiverProfileId_idx" ON "Message"("receiverProfileId");

-- CreateIndex
CREATE INDEX "Message_createdAt_idx" ON "Message"("createdAt");

-- CreateIndex
CREATE INDEX "Goal_profileId_idx" ON "Goal"("profileId");

-- CreateIndex
CREATE INDEX "Goal_month_idx" ON "Goal"("month");

-- CreateIndex
CREATE UNIQUE INDEX "Goal_profileId_month_key" ON "Goal"("profileId", "month");

-- CreateIndex
CREATE INDEX "Session_profileId_idx" ON "Session"("profileId");

-- CreateIndex
CREATE INDEX "Session_spotId_idx" ON "Session"("spotId");

-- CreateIndex
CREATE INDEX "Session_date_idx" ON "Session"("date");

-- CreateIndex
CREATE INDEX "UserSpot_profileId_idx" ON "UserSpot"("profileId");

-- CreateIndex
CREATE INDEX "UserSpot_spotId_idx" ON "UserSpot"("spotId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSpot_profileId_spotId_key" ON "UserSpot"("profileId", "spotId");

-- CreateIndex
CREATE UNIQUE INDEX "Area_slug_key" ON "Area"("slug");

-- CreateIndex
CREATE INDEX "Area_prefectureCode_idx" ON "Area"("prefectureCode");

-- CreateIndex
CREATE INDEX "Spot_areaId_idx" ON "Spot"("areaId");

-- CreateIndex
CREATE UNIQUE INDEX "Spot_areaId_slug_key" ON "Spot"("areaId", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "Spot_areaId_name_key" ON "Spot"("areaId", "name");

-- CreateIndex
CREATE INDEX "SpotReport_profileId_idx" ON "SpotReport"("profileId");

-- CreateIndex
CREATE INDEX "SpotReport_spotId_idx" ON "SpotReport"("spotId");

-- CreateIndex
CREATE INDEX "SpotReport_observedAt_idx" ON "SpotReport"("observedAt");

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followeeProfileId_fkey" FOREIGN KEY ("followeeProfileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Follow" ADD CONSTRAINT "Follow_followerProfileId_fkey" FOREIGN KEY ("followerProfileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderProfileId_fkey" FOREIGN KEY ("senderProfileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_receiverProfileId_fkey" FOREIGN KEY ("receiverProfileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Goal" ADD CONSTRAINT "Goal_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_spotId_fkey" FOREIGN KEY ("spotId") REFERENCES "Spot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSpot" ADD CONSTRAINT "UserSpot_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSpot" ADD CONSTRAINT "UserSpot_spotId_fkey" FOREIGN KEY ("spotId") REFERENCES "Spot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spot" ADD CONSTRAINT "Spot_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpotReport" ADD CONSTRAINT "SpotReport_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpotReport" ADD CONSTRAINT "SpotReport_spotId_fkey" FOREIGN KEY ("spotId") REFERENCES "Spot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
