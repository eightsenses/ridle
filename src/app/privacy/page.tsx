'use client';
import LegalSection from '@/app/_components/LegalSection';
import PageHeader from '@/app/_components/PageHeader';

export default function Privacy() {
  return (
    <section className="mx-auto my-8 w-full max-w-4xl">
      <PageHeader title="個人情報の取扱いについて" />
      <p className="mt-3 leading-[1.8]">
        Ridle（以下、「運営者」といいます。）は、運営者が提供するアプリ/ウェブサービス（以下、「本サービス」といいます。）における、ユーザー情報（個人情報を含みます。）の取扱いについて、以下のとおり定めます。
      </p>
      <article className="space-y-16 leading-[1.8]">
        {/* <!-- 第1条 --> */}
        <LegalSection className="mt-14" title="第1条（個人情報）">
          <p className="mt-3">
            「個人情報」とは、氏名、住所、電話番号、メールアドレスなど、特定の個人を識別できる情報、または個人識別符号を含む情報をいいます。
          </p>
        </LegalSection>

        {/* <!-- 第2条 --> */}
        <LegalSection title="第2条（取得する情報・取得方法）">
          <p className="mt-3">
            「個人情報」とは、氏名、住所、電話番号、メールアドレスなど、特定の個人を識別できる情報、または個人識別符号を含む情報をいいます。
          </p>
          <ol className="mt-4 space-y-3">
            <li className="bg-gray-100 p-5">
              <h3 className="text-md font-semibold text-semantic-text-black">
                1. ユーザーが入力・提供する情報
              </h3>
              <p className="mt-1 text-sm text-semantic-text-black">
                メールアドレス、ユーザー名、表示名、プロフィール画像、自己紹介文、SNSリンク、その他ユーザーが任意に入力する情報
              </p>
            </li>
            <li className="bg-gray-100 p-5">
              <h3 className="text-md font-semibold text-semantic-text-black">
                2. サービス利用に伴い生成・保存される情報
              </h3>
              <p className="mt-1 text-sm text-semantic-text-black">
                サーフセッションの記録（日時、スポット／エリア、メモ、写真・サムネイル等）、フォロー・メッセージ等の機能利用により生成される情報
              </p>
            </li>
            <li className="bg-gray-100 p-5">
              <h3 className="text-md font-semibold text-semantic-text-black">
                3. 端末・ログ等の情報（自動取得）
              </h3>
              <p className="mt-1 text-sm text-semantic-text-black">
                IPアドレス、端末情報、OS／ブラウザ情報、Cookie等の識別子、アクセスログ、操作履歴、クラッシュ情報等
              </p>
            </li>
            <li className="bg-gray-100 p-5">
              <h3 className="text-md font-semibold text-semantic-text-black">
                4. 位置情報（取得する場合）
              </h3>
              <p className="mt-1 text-sm text-semantic-text-black">
                本サービスが位置情報を利用する機能を提供する場合、ユーザーの許可に基づき位置情報（概算または正確）を取得することがあります。ユーザーは端末設定等により、いつでも取得を停止できます。
              </p>
            </li>
          </ol>
        </LegalSection>

        {/* <!-- 第3条 --> */}
        <LegalSection title="第3条（利用目的）">
          <p className="mt-3">運営者が取得した情報を収集・利用する目的は、以下のとおりです。</p>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-semantic-background-default"></span>
              <span>
                本サービスの提供・運営のため（アカウント作成、認証、データ保存等を含みます）
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-semantic-background-default"></span>
              <span>
                ユーザーからのお問い合わせに回答するため（本人確認を行うことを含みます）
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-semantic-background-default"></span>
              <span>
                新機能、更新情報、キャンペーン等および運営者が提供する他のサービスの案内の連絡を行うため
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-semantic-background-default"></span>
              <span>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-semantic-background-default"></span>
              <span>
                利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-semantic-background-default"></span>
              <span>
                ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-semantic-background-default"></span>
              <span>有料サービスを提供する場合、利用料金を請求するため</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-semantic-background-default"></span>
              <span>上記の利用目的に付随する目的</span>
            </li>
          </ul>
        </LegalSection>

        {/* <!-- 第4条 --> */}
        <LegalSection title="第4条（利用目的の変更）">
          <p className="mt-3">
            運営者は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。
            利用目的の変更を行った場合には、変更後の目的について、運営者所定の方法によりユーザーに通知し、または本サービス上に公表するものとします。
          </p>
        </LegalSection>

        {/* <!-- 第5条 --> */}
        <LegalSection title="第5条（第三者提供）">
          <p className="mt-3">
            運営者は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、個人情報を第三者に提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-semantic-background-default"></span>
              <span>法令に基づく場合</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-semantic-background-default"></span>
              <span>
                人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-semantic-background-default"></span>
              <span>
                公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-semantic-background-default"></span>
              <span>
                国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
              </span>
            </li>
          </ul>
          <div className="mt-4 bg-gray-100 p-5 text-semantic-text-black">
            <p>なお、次に掲げる場合には、当該情報の提供先は第三者に該当しないものとします。</p>
            <ul className="mt-1 space-y-1">
              <li className="flex gap-2">
                <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-semantic-background-black"></span>
                <span>
                  運営者が利用目的の達成に必要な範囲内において、個人情報の取扱いの全部または一部を委託する場合
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-semantic-background-black"></span>
                <span>合併その他の事由による事業の承継に伴って個人情報が提供される場合</span>
              </li>
            </ul>
          </div>
        </LegalSection>

        {/* <!-- 第6条 --> */}
        <LegalSection title="第6条（個人情報の開示）">
          <p className="mt-3">
            運営者は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。
            ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
          </p>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-semantic-background-default"></span>
              <span>
                本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合
              </span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-semantic-background-default"></span>
              <span>運営者の業務の適正な実施に著しい支障を及ぼすおそれがある場合</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-semantic-background-default"></span>
              <span>その他法令に違反することとなる場合</span>
            </li>
          </ul>
          <p className="mt-4">
            開示請求に際して手数料をいただく場合は、別途運営者が定める方法により請求します。
            <span className="font-medium">（手数料：1件あたり[ ]円／無料 など）</span>
          </p>
        </LegalSection>

        {/* <!-- 第7条 --> */}
        <LegalSection title="第7条（個人情報の訂正および削除）">
          <p className="mt-3">
            ユーザーは、運営者の保有する自己の個人情報が誤った情報である場合には、運営者が定める手続きにより、運営者に対して個人情報の訂正、追加または削除を請求することができます。
            運営者は、ユーザーから前項の請求を受けてその請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の訂正等を行うものとします。
            運営者は、訂正等を行った場合、または行わない旨の決定をしたときは、遅滞なく、これをユーザーに通知します。
          </p>
        </LegalSection>

        {/* <!-- 第8条 --> */}
        <LegalSection title="第8条（個人情報の利用停止等）">
          <p className="mt-3">
            運営者は、本人から、個人情報が利用目的の範囲を超えて取り扱われているという理由、または不正の手段により取得されたものであるという理由により、その利用の停止または消去を求められた場合には、遅滞なく必要な調査を行います。
            前項の調査結果に基づき、その請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の利用停止等を行います。
            運営者は、利用停止等を行った場合、または行わない旨の決定をしたときは、遅滞なく、これをユーザーに通知します。
          </p>
        </LegalSection>

        {/* <!-- 第9条 --> */}
        <LegalSection title="第9条（本方針の変更）">
          <p className="mt-3">
            本方針の内容は、法令その他本方針に別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。
            変更後の内容は、本サービス上に掲載したときから効力を生じるものとします。
          </p>
        </LegalSection>

        {/* <!-- 第10条 --> */}
        <LegalSection title="第10条（お問い合わせ窓口）">
          <div className="mt-4 bg-gray-100 p-5 text-semantic-text-black">
            <dl className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-32 flex-none font-medium text-semantic-text-black">事業者名</dt>
                <dd>EIGHT SENSES</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-32 flex-none font-medium text-semantic-text-black">住所</dt>
                <dd>
                  〒150-0021
                  <br />
                  東京都渋谷区恵比寿西2-4-8 ウィンド恵比寿ビル
                </dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-32 flex-none font-medium text-semantic-text-black">代表者</dt>
                <dd>瀬尾 侑平</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <dt className="w-32 flex-none font-medium text-semantic-text-black">連絡先</dt>
                <dd>
                  <a className="hover:underline" href="mailto:info@eight-senses.jp">
                    info@eight-senses.jp
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </LegalSection>
      </article>
    </section>
  );
}
