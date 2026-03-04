'use client';
import LegalSection from '@/app/_components/LegalSection';
import PageHeader from '@/app/_components/PageHeader';

export default function Privacy() {
  return (
    <section className="mx-auto my-8 w-full max-w-4xl">
      <PageHeader title="利用規約" />
      <p className="mt-3 leading-[1.8]">
        この利用規約（以下、「本規約」といいます。）は、Ridle（以下、「運営者」といいます。）が提供するアプリ/ウェブサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って本サービスをご利用いただきます。
      </p>

      <article className="space-y-16 leading-[1.8]">
        {/* <!-- 第1条 --> */}
        <LegalSection className="mt-14" title="第1条（適用）">
          <ol className="mt-3 space-y-2">
            <li className="flex gap-1">
              <span className="flex-none">1.</span>
              <span>本規約は、ユーザーと運営者との間の本サービスの利用に関わる一切の関係に適用されます。</span>
            </li>
            <li className="flex gap-1">
              <span className="flex-none">2.</span>
              <span>運営者が本サービス上で掲載するルール等（ガイドライン、ヘルプ、注意事項等）は、本規約の一部を構成するものとします。</span>
            </li>
            <li className="flex gap-1">
              <span className="flex-none">3.</span>
              <span>本規約の内容と前項のルール等が矛盾する場合、本規約の規定が優先されます。</span>
            </li>
          </ol>
        </LegalSection>

        {/* <!-- 第2条 --> */}
        <LegalSection title="第2条（利用登録）">
          <ol className="mt-3 space-y-2">
            <li className="flex gap-1">
              <span className="flex-none">1.</span>
              <span>本サービスにおいては、登録希望者が本規約に同意のうえ、運営者所定の方法により利用登録を申請し、運営者がこれを承認することにより利用登録が完了するものとします。</span>
            </li>
            <li className="flex gap-1">
              <span className="flex-none">2.</span>
              <span>運営者は、利用登録の申請者に以下の事由があると判断した場合、利用登録を承認しないことがあります。</span>
            </li>
          </ol>

          <ul className="mt-4 space-y-3">
            <li className="flex gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-semantic-background-default"></span>
              <span>申請内容に虚偽、誤記または記載漏れがあった場合</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-semantic-background-default"></span>
              <span>過去に本規約に違反したことがある者からの申請である場合</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-semantic-background-default"></span>
              <span>その他、運営者が利用登録を相当でないと判断した場合</span>
            </li>
          </ul>
        </LegalSection>

        {/* <!-- 第3条 --> */}
        <LegalSection title="第3条（アカウント管理）">
          <ol className="mt-3 space-y-2">
            <li className="flex gap-1">
              <span className="flex-none">1.</span>
              <span>ユーザーは、自己の責任において、本サービスのアカウント情報を適切に管理するものとします。</span>
            </li>
            <li className="flex gap-1">
              <span className="flex-none">2.</span>
              <span>ユーザーは、いかなる場合にも、アカウントを第三者に譲渡または貸与し、もしくは第三者と共用することはできません。</span>
            </li>
            <li className="flex gap-1">
              <span className="flex-none">3.</span>
              <span>運営者は、ログイン情報が登録情報と一致してログインされた場合、当該ユーザーによる利用とみなします。</span>
            </li>
          </ol>
        </LegalSection>

        {/* <!-- 第4条 --> */}
        <LegalSection title="第4条（禁止事項）">
          <p className="mt-3">
            ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
          </p>
          <ul className="mt-4 space-y-3">
            {[
              '法令または公序良俗に違反する行為',
              '犯罪行為に関連する行為',
              '運営者、本サービスの他ユーザー、または第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為',
              '本サービスの運営を妨害するおそれのある行為（不正アクセス、過度な負荷、脆弱性の探索・悪用等を含みます）',
              '虚偽の情報を登録する行為',
              'なりすまし行為',
              '迷惑行為、誹謗中傷、差別、嫌がらせ、脅迫に該当する行為',
              '反社会的勢力への利益供与その他の関与',
              'その他、運営者が不適切と判断する行為'
            ].map((text) => (
              <li key={text} className="flex gap-2">
                <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-semantic-background-default"></span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </LegalSection>

        {/* <!-- 第5条 --> */}
        <LegalSection title="第5条（ユーザーコンテンツ）">
          <ol className="mt-3 space-y-2">
            <li className="flex gap-1">
              <span className="flex-none">1.</span>
              <span>ユーザーが本サービスに投稿・送信・保存する文章、画像、コメント、メッセージ、セッション記録等（以下、「ユーザーコンテンツ」といいます。）の内容については、ユーザーが責任を負うものとします。</span>
            </li>
            <li className="flex gap-1">
              <span className="flex-none">2.</span>
              <span>ユーザーは、ユーザーコンテンツについて、第三者の権利を侵害しないことを保証するものとします。</span>
            </li>
            <li className="flex gap-1">
              <span className="flex-none">3.</span>
              <span>運営者は、法令または本規約に違反するおそれがある場合、その他運営上必要な場合、ユーザーコンテンツを削除、非公開化、または閲覧制限することができます。</span>
            </li>
          </ol>
        </LegalSection>

        {/* <!-- 第6条 --> */}
        <LegalSection title="第6条（知的財産権）">
          <ol className="mt-3 space-y-2">
            <li className="flex gap-1">
              <span className="flex-none">1.</span>
              <span>本サービスに関する著作権、商標権その他の知的財産権は、運営者または運営者にライセンスを許諾している者に帰属します。</span>
            </li>
            <li className="flex gap-1">
              <span className="flex-none">2.</span>
              <span>ユーザーは、運営者の許諾なく、本サービスの内容を複製、転載、改変、配布等してはなりません。</span>
            </li>
          </ol>
        </LegalSection>

        {/* <!-- 第7条 --> */}
        <LegalSection title="第7条（本サービスの提供の停止等）">
          <p className="mt-3">
            運営者は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができます。
          </p>
          <ul className="mt-4 space-y-3">
            {[
              'システム保守点検または更新を行う場合',
              '事故（通信障害、火災、停電等）により提供が困難となった場合',
              '天災地変等の不可抗力により提供が困難となった場合',
              'その他、運営者が停止または中断を必要と判断した場合'
            ].map((text) => (
              <li key={text} className="flex gap-2">
                <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-semantic-background-default"></span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </LegalSection>

        {/* <!-- 第8条 --> */}
        <LegalSection title="第8条（利用制限および登録抹消）">
          <p className="mt-3">
            運営者は、ユーザーが本規約のいずれかの条項に違反した場合、またはそのおそれがある場合、事前の通知なく、ユーザーに対して本サービスの利用を制限し、または利用登録を抹消することができます。
          </p>
        </LegalSection>

        {/* <!-- 第9条 --> */}
        <LegalSection title="第9条（退会）">
          <p className="mt-3">
            ユーザーは、運営者所定の方法により、本サービスから退会できるものとします。退会後のデータの取扱いは、運営者のプライバシーポリシーおよび本サービス上の案内に従うものとします。
          </p>
        </LegalSection>

        {/* <!-- 第10条 --> */}
        <LegalSection title="第10条（保証の否認および免責事項）">
          <ol className="mt-3 space-y-2">
            <li className="flex gap-1">
              <span className="flex-none">1.</span>
              <span>運営者は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定目的適合性、セキュリティ等）がないことを明示または黙示に保証しません。</span>
            </li>
            <li className="flex gap-1">
              <span className="flex-none">2.</span>
              <span>運営者は、本サービスの利用によりユーザーに生じた損害について、運営者の故意または重過失による場合を除き、責任を負いません。</span>
            </li>
            <li className="flex gap-1">
              <span className="flex-none">3.</span>
              <span>本サービスに関連してユーザーと他のユーザーまたは第三者との間に生じた取引、連絡、紛争等については、ユーザーが自己の責任において解決するものとし、運営者は責任を負いません。</span>
            </li>
          </ol>
        </LegalSection>

        {/* <!-- 第11条 --> */}
        <LegalSection title="第11条（サービス内容の変更等）">
          <p className="mt-3">
            運営者は、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することができます。
          </p>
        </LegalSection>

        {/* <!-- 第12条 --> */}
        <LegalSection title="第12条（利用規約の変更）">
          <p className="mt-3">
            運営者は、必要と判断した場合には、本規約を変更できるものとします。変更後の本規約は、本サービス上に掲載した時点から効力を生じるものとします。
          </p>
        </LegalSection>

        {/* <!-- 第13条 --> */}
        <LegalSection title="第13条（個人情報の取扱い）">
          <p className="mt-3">
            運営者は、本サービスの利用によって取得する個人情報については、運営者のプライバシーポリシーに従い適切に取り扱うものとします。
          </p>
        </LegalSection>

        {/* <!-- 第14条 --> */}
        <LegalSection title="第14条（通知または連絡）">
          <p className="mt-3">
            ユーザーと運営者との間の通知または連絡は、運営者の定める方法により行うものとします。
          </p>
        </LegalSection>

        {/* <!-- 第15条 --> */}
        <LegalSection title="第15条（準拠法・裁判管轄）">
          <ol className="mt-3 space-y-2">
            <li className="flex gap-1">
              <span className="flex-none">1.</span>
              <span>本規約の解釈にあたっては、日本法を準拠法とします。</span>
            </li>
            <li className="flex gap-1">
              <span className="flex-none">2.</span>
              <span>本サービスに関して紛争が生じた場合には、運営者の所在地を管轄する裁判所を専属的合意管轄とします。</span>
            </li>
          </ol>
        </LegalSection>
      </article>
    </section>
  );
}
