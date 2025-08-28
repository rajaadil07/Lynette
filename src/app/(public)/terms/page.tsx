"use client";

import { Footer } from "@/components/sections";

export default function TermsPage() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-24 md:pt-28 lg:pt-32 pb-20">
        <header className="text-center mb-24 lg:mb-32">
          <h1 className="font-inter text-5xl md:text-6xl lg:text-7xl font-light text-[#F8F9FA] leading-[1.1] tracking-tight">
            Terms of
            <span className="block font-lora font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] mt-3">
              Service
            </span>
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-[#F8F9FA]/70 max-w-2xl mx-auto font-inter leading-relaxed">
            Please read these terms carefully before using GhostSync. By accessing or using our platform, you agree to these terms.
          </p>
        </header>
        
        <section className="w-full max-w-4xl space-y-8 text-left">
          <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#2A2A2A]">
            <div className="text-center mb-8">
              <h2 className="font-inter text-2xl text-[#F8F9FA] mb-2">Terms and Conditions for GhostSync (SaaS)</h2>
              <p className="text-[#F8F9FA]/70 font-inter text-sm">Version 1.2</p>
            </div>
            
            <div className="text-[#F8F9FA]/80 font-inter text-sm leading-relaxed space-y-6">
              <p>
                These &apos;Software as a Service&apos; Terms and Conditions (&quot;SaaS Terms&quot;) apply to the
                agreement entered into between the Customer (as identified in the Terms of Agreement)
                and GhostSync (&quot;Service Provider&quot;) (&quot;Master Agreement&quot;). These SaaS Terms set forth the
                terms and conditions under which GhostSync will provide the Customer with access to
                certain applications as set forth in the Terms of Agreement (&quot;Application(s)&quot;) and user
                documentation that GhostSync makes generally available in hard copy or electronic form
                to its customer base in conjunction with the subscription of such Applications
                (&quot;Documentation&quot;). The Applications and the Documentation will hereinafter collectively
                be referred to as the &quot;Software&quot; or &quot;Software Product(s)&quot;.
              </p>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">1. Subscription Grant and Right to Use</h3>
                <div className="ml-4 space-y-3">
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">1.1 Subscription Grant:</h4>
                    <p>Subject to all limitations and restrictions contained herein and the Terms of Agreement,
                    GhostSync grants Customer a subscription, software as a service (&apos;SaaS&apos;), nonexclusive,
                    and nontransferable right to access and operate the object code form of Applications (and
                    use its Documentation) as hosted by GhostSync as described in the Terms of Agreement
                    (&quot;Use&quot;) and solely to perform those functions described in the Documentation.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">1.2 Use:</h4>
                    <p>Customer will have a limited right to Use the Application solely for its internal business
                    purposes, to perform the functions described in the Documentation. Customer shall not
                    allow any website that is not fully owned by Customer to frame, syndicate, distribute,
                    replicate, or copy any portion of Customer&apos;s website that provides direct or indirect access
                    to the Application. Unless expressly permitted in the Terms of Agreement, Customer shall
                    not permit any subsidiaries, affiliated companies, or third parties to access the Software.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">1.3 Subscription Type:</h4>
                    <p>Unless otherwise specifically stated in the Terms of Agreement, the type of subscription
                    granted will be one of the following:</p>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>• Solo Ghost Subscription – the Application may be used by a single authorized
                      individual ghostwriter for internal business purposes only.</li>
                      <li>• Ghostwriting Agencies Subscription – the Application may be used by multiple
                      employees or contractors of a ghostwriting agency, limited to the number of
                      Authorized Users specified in the Terms of Agreement.</li>
                      <li>• Publisher Subscription – the Application is limited to the number of Authorized
                      internal users within a publishing house solely for the internal use and benefit of the
                      Customer, subject to these SaaS Terms.</li>
                    </ul>
                    <p className="mt-2">Any scope of subscription other than the above must be expressly designated and defined
                    in the Terms of Agreement.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">2. Payment</h3>
                <div className="ml-4 space-y-3">
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">2.1 Fees:</h4>
                    <p>Customer shall pay GhostSync the fees indicated in the Subscription Terms of
                    Agreement.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">2.2 Taxes:</h4>
                    <p>All fees exclude taxes. Customer shall reimburse GhostSync for any applicable sales, VAT,
                    or use taxes, excluding GhostSync&apos;s income taxes.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">3. Hosting and Service Availability</h3>
                <div className="ml-4 space-y-3">
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">3.1 Service Availability:</h4>
                    <p>GhostSync will use reasonable efforts to achieve its availability goals.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">3.2 Support Services:</h4>
                    <p>Upon payment of the relevant fees, Customer may receive certain support services as
                    specified in the Terms of Agreement.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">3.3 Service Levels Disclaimer:</h4>
                    <p>Unless otherwise specified in a separate SLA, GhostSync does not guarantee
                    uninterrupted service.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">4. Ownership</h3>
                <div className="ml-4 space-y-3">
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">4.1 Reservation of Rights:</h4>
                    <p>Customer acknowledges it has no ownership interest in the Software.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">4.2 Marks and Publicity:</h4>
                    <p>Each party retains its own trademarks. GhostSync may list Customer as a client unless
                    otherwise agreed.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">5. Confidentiality and Privacy</h3>
                <div className="ml-4 space-y-3">
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">5.1 Definition:</h4>
                    <p>&quot;Confidential Information&quot; includes all information marked pursuant to this
                    Section and disclosed by either party, before or after the Quote Term Start Date, and generally not publicly known, whether tangible or intangible
                    and in whatever form or medium provided, as well as any information generated by a party
                    that contains, reflects, or is derived from such information.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">5.8 Data Protection and Privacy:</h4>
                    <p>GhostSync will maintain safeguards to protect Customer Data and comply with applicable
                    data protection laws.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">5.9 Data Breach Notification:</h4>
                    <p>In the event of a confirmed data breach, GhostSync will notify Customer without undue
                    delay.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">6. Warranty</h3>
                <div className="ml-4 space-y-3">
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">6.1 No Malicious Code:</h4>
                    <p>To the knowledge of GhostSync, the Application does not contain malicious code.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">6.2 Authorized Representative:</h4>
                    <p>Each party warrants it has the authority to enter this Agreement.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">6.3 Disclaimer of Warranties:</h4>
                    <p>Except as expressly stated, the Software is provided &quot;as is&quot; without warranties of
                    merchantability, fitness for a purpose, or noninfringement.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">6.4 Modifications:</h4>
                    <p>All warranties are void if Customer modifies the Software without GhostSync&apos;s approval.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">6.5 Beta Features Disclaimer:</h4>
                    <p>Beta or experimental features are provided &quot;as is&quot; with no warranties.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">7. Indemnification</h3>
                <div className="ml-4 space-y-3">
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">7.1 Service Provider Indemnity:</h4>
                    <p>Service Provider will defend at its expense any cause of action brought against Customer,
                    to the extent that such cause of action is based on a claim that the Application, as hosted
                    by Service Provider to Customer, infringes a United States patent, copyright, or trade secret
                    of a third party.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">7.2 No Liability:</h4>
                    <p>Service Provider will have no liability for any claim of infringement based on modifications,
                    third-party software integration, or use outside permitted scope.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">7.3 Customer Indemnity:</h4>
                    <p>Customer agrees to defend, indemnify, and hold Service Provider harmless from claims
                    arising from Customer&apos;s breach of obligations, negligence, or misuse of the Application.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">8. Limitation of Liability</h3>
                <div className="ml-4 space-y-3">
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">8.1 Liability Cap:</h4>
                    <p>Neither party will be liable for damages exceeding the amount of fees paid by Customer
                    over a twelve-month period preceding the claim.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">8.2 Disclaimer of Damages:</h4>
                    <p>Service Provider will not be liable for any special, incidental, indirect, exemplary, punitive,
                    or consequential damages of any kind.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">9. Term and Termination</h3>
                <div className="ml-4 space-y-3">
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">9.1 Subscription Term:</h4>
                    <p>The term will continue until termination of the last Quote, with automatic renewal unless
                    Customer provides 60 days written notice of intent not to renew.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">9.2 Termination by Service Provider:</h4>
                    <p>Service Provider may terminate for payment defaults, material breaches, or bankruptcy
                    proceedings.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">9.3 Termination by Customer:</h4>
                    <p>Customer may terminate on 90 days written notice if Service Provider fails to perform
                    material obligations and fails to cure within the notice period.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">10. Customer Obligations</h3>
                <div className="ml-4 space-y-3">
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">10.1 Compliance:</h4>
                    <p>Customer agrees to comply with all applicable laws, regulations, and ordinances relating
                    to these SaaS Terms.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">10.2 Authorized Users:</h4>
                    <p>Customer shall inform Authorized Users of their rights and obligations and maintain
                    appropriate security measures.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">10.3 Acceptable Use:</h4>
                    <p>Customer agrees not to use the Software for illegal purposes, upload malicious content,
                    harass others, violate third-party rights, or attempt unauthorized access.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">11. Miscellaneous</h3>
                <div className="ml-4 space-y-3">
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">11.1 Assignment:</h4>
                    <p>Customer may not assign these SaaS Terms or otherwise transfer any right created
                    hereunder whether by operation of law, change of control, or in any other manner, without
                    the prior written consent of Service Provider. Any purported assignment of these SaaS
                    Terms, or any rights in violation of this Section will be deemed void. Service Provider may
                    assign these SaaS Terms, sub-contract or otherwise transfer any right or obligation under
                    these SaaS Terms to a third party without the Customer&apos;s prior written consent.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">11.2 Foreign Nationals:</h4>
                    <p>Customer acknowledges that Service Provider employs foreign nationals, and that these
                    foreign national employees will work, on Service Provider&apos;s behalf, to perform its
                    obligations and services hereunder.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">11.3 Affiliates and Third Parties:</h4>
                    <p>At the direction and sole discretion of Service Provider, affiliates of Service Provider (the
                    &quot;Service Provider Affiliates&quot;) may perform certain tasks related to Service Provider&apos;s
                    obligations and rights under the Quote and the Master Agreement, including, but not
                    limited to, invoicing, payment, technical support, project management and/or sales
                    support. Customer hereby consents to the Service Provider Affiliates&apos; role. Customer
                    further agrees and acknowledges that Service Provider and Customer are the only parties
                    to the Quote and the Master Agreement, and that any action taken by Service Provider
                    Affiliates in connection with the performance of Service Provider&apos;s obligations under the
                    Quote and the Master Agreement will not give rise to any cause of action against the
                    Service Provider Affiliates, regardless of the theory of recovery. Service Provider shall at all
                    times retain full responsibility for Service Provider Affiliates&apos; compliance with the
                    applicable terms and conditions of the Quote and the Master Agreement. Service Provider
                    will have the right to use third parties, including offshore entities who employ foreign
                    nationals, as well as employees and contractors of Service Provider Affiliates and
                    subsidiaries, who may also be foreign nationals (collectively, &quot;Subcontractors&quot;) in the
                    performance of its obligations hereunder and, for purposes of these SaaS Terms, all
                    references to Service Provider or its employees will be deemed to include such
                    Subcontractors. Service Provider will have the right to disclose Customer Confidential
                    Information to such third parties provided such third parties are subject to confidentiality
                    obligations similar to those between Service Provider and Customer.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">11.4 Technical Data:</h4>
                    <p>Customer shall not provide to Service Provider any technical data as that term is defined in
                    the International Traffic in Arms Regulations (&quot;ITAR&quot;) at 22 CFR 120.10. Customer shall
                    certify that all information provided to Service Provider has been reviewed and scrubbed so
                    that all technical data and other sensitive information relevant to Customer&apos;s ITAR
                    regulated project has been removed and the information provided is only relevant to bug
                    reports on Service Provider products.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">11.5 Compliance with Laws:</h4>
                    <p>Both parties agree to comply with all applicable laws, regulations, and ordinances relating
                    to such party&apos;s performance under these SaaS Terms.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">11.6 Survival:</h4>
                    <p>The provisions set forth in Sections 2, 4, 5, 6.4, 8, 9.3, 9.4 and 11 of these SaaS Terms will
                    survive termination or expiration of these SaaS Terms and any applicable license
                    hereunder.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">11.7 Notices:</h4>
                    <p>Any notice required under these SaaS Terms shall be given in writing and will be deemed
                    effective upon delivery to the party to whom addressed. All notices shall be sent to the
                    applicable address specified on the Quote or to such other address as the parties may
                    designate in writing. Any notice of material breach will clearly define the breach including
                    the specific contractual obligation that has been breached.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">11.8 Force Majeure:</h4>
                    <p>Service Provider will not be liable to Customer for any delay or failure of Service Provider to
                    perform its obligations hereunder if such delay or failure arises from any cause or causes
                    beyond the reasonable control of Service Provider. Such causes will include, but are not
                    limited to, acts of God, floods, fires, loss of electricity or other utilities, or delays by
                    Customer in providing required resources or support or performing any other requirements
                    hereunder.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">11.9 Restricted Rights:</h4>
                    <p>Use of the Software by or for the United States Government is conditioned upon the
                    Government agreeing that the Software is subject to Restricted Rights as provided under
                    the provisions set forth in FAR 52.227-19. Customer shall be responsible for assuring that
                    this provision is included in all agreements with the United States Government and that the
                    Software, when accessed by the Government, is correctly marked as required by
                    applicable Government regulations governing such Restricted Rights as of such access.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">11.10 Entire Agreement:</h4>
                    <p>These SaaS Terms together with the documents referenced herein constitute the entire
                    agreement between the parties regarding the subject matter hereof and supersedes all
                    proposals and prior discussions and writings between the parties with respect to the
                    subject matter contained herein. All terms respecting the subject matter of the SaaS Terms
                    and contained in purchase orders, invoices, acknowledgments, shipping instructions, or
                    other forms exchanged between the parties will be void and of no effect.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">11.11 Modifications:</h4>
                    <p>The parties agree that these SaaS Terms cannot be altered, amended or modified, except
                    by a writing signed by an authorized representative of each party.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">11.12 Non-solicitation:</h4>
                    <p>During the term of these SaaS Terms and for a period of two (2) years thereafter, Customer
                    agrees not to hire, solicit, nor attempt to solicit, the services of any employee or
                    Subcontractor of Service Provider without the prior written consent of Service Provider.
                    Customer further agrees not to hire, solicit, nor attempt to solicit, the services of any
                    former employee or Subcontractor of Service Provider for a period of one (1) year from such
                    former employee&apos;s or Subcontractor&apos;s last date of service with Service Provider. Violation of
                    this provision will entitle Service Provider to liquidated damages against Customer equal to
                    two hundred percent (200%) of the solicited person&apos;s gross annual compensation.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">11.13 Headings:</h4>
                    <p>Headings are for reference purposes only, have no substantive effect, and will
                    not enter into the interpretation hereof.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">11.14 No Waiver:</h4>
                    <p>No failure or delay in enforcing any right or exercising any remedy will be deemed a waiver
                    of any right or remedy.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">11.15 Severability and Reformation:</h4>
                    <p>Each provision of these SaaS Terms is a separately enforceable provision. If any provision
                    of these SaaS Terms is determined to be or becomes unenforceable or illegal, such
                    provision will be reformed to the minimum extent necessary in order for these SaaS Terms
                    to remain in effect in accordance with its terms as modified by such reformation.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">11.16 Independent Contractor:</h4>
                    <p>Service Provider is an independent contractor and nothing in
                    these SaaS Terms will be deemed to make Service Provider an agent, employee, partner, or
                    joint venture partnership of Customer. Neither party will have authority to bind, commit, or
                    otherwise obligate the other party in any manner whatsoever.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">11.17 Interpretation:</h4>
                    <p>The Parties acknowledge and agree that the Parties are sophisticated parties engaging in a
                    fully negotiated commercial transaction with ample review of terms prior to execution. Any
                    dispute term contained in this Agreement will thus not be interpreted against Service
                    Provider and the Service Provider will not be accorded Drafter Status with respect to this
                    Agreement or related terms.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">11.18 Governing Law; Venue:</h4>
                    <p>The laws of the State of Georgia shall govern this Agreement. The parties agree that the
                    federal and state courts located in Fulton County, Georgia, USA will have exclusive
                    jurisdiction. Mediation will be held in Atlanta, Georgia, USA.</p>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">11.19 Dispute Resolution:</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold mb-2">Negotiations</p>
                        <p>Where there is a dispute, controversy, or claim arising under, out of, or relating to these
                        SaaS Terms, the aggrieved party shall notify the other party in writing of the nature of such
                        dispute with as much detail as possible about the alleged deficient performance of the
                        other party. A representative from senior management of each of the parties shall meet in
                        person or communicate by telephone within five (5) business days of the date of the written
                        notification in order to reach an agreement about the nature of the alleged deficiency and
                        the corrective action to be taken by the respective parties.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Mediation</p>
                        <p>Any dispute, controversy, or claim arising under, out of, or relating to these SaaS Terms and
                        any subsequent amendments of these SaaS Terms, including, without limitation, its
                        formation, validity, binding effect, interpretation, performance, breach, or termination, as
                        well as non-contractual claims, and any claims with respect to the validity of this
                        mediation agreement (hereinafter the &quot;Dispute&quot;), shall be submitted to mediation in
                        accordance with the then-current WIPO Mediation Rules. The language to be used in the
                        mediation will be English.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Opportunity to Cure</p>
                        <p>Notwithstanding anything contained hereunder, Customer agrees and acknowledges that
                        no dispute resolution or litigation will be pursued by Customer for any breach of these SaaS
                        Terms until and unless Service Provider has had an opportunity to cure any alleged breach.
                        Customer agrees to provide Service Provider with a detailed description of any alleged
                        failure and a description of the steps that Customer understands must be taken by Service
                        Provider to resolve the failure. Service Provider shall have thirty (30) days from Service
                        Provider&apos;s receipt of Customer&apos;s notice to complete the cure.</p>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Injunctive Relief</p>
                        <p>The parties agree that it will not be inconsistent with their duty to mediate to seek injunctive
                        or other interim relief from a competent court. The parties, in addition to all other available
                        remedies, shall each have the right to initiate an action in any court of competent
                        jurisdiction in order to request injunctive or other interim relief with respect to a violation of
                        intellectual property rights or confidentiality obligations. The choice of venue does not
                        prevent a party from seeking injunctive or any interim relief in any appropriate jurisdiction.</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">11.20 Export Control and Sanctions:</h4>
                    <p>Customer may not use the Software in violation of U.S. export control laws or sanctions.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">12. Entire Agreement</h3>
                <p>These SaaS Terms together with referenced documents (including Privacy Policy and any
                SLA) constitute the entire agreement between Customer and GhostSync and supersede
                all prior agreements.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#2A2A2A]">
            <h2 className="font-inter text-xl text-[#F8F9FA] mb-4">Contact Information</h2>
            <div className="space-y-4 text-[#F8F9FA]/80 font-inter text-base">
              <p>If you have any questions about these Terms and Conditions, please contact us:</p>
              <div className="space-y-2">
                <p><strong>Email:</strong> <a href="mailto:legal@ghostsync.ai" className="text-[#5D9CEC] underline hover:text-[#4A8BD8]">legal@ghostsync.ai</a></p>
                <p><strong>Support:</strong> <a href="mailto:support@ghostsync.ai" className="text-[#5D9CEC] underline hover:text-[#4A8BD8]">support@ghostsync.ai</a></p>
                <p><strong>Business Inquiries:</strong> <a href="mailto:business@ghostsync.ai" className="text-[#5D9CEC] underline hover:text-[#4A8BD8]">business@ghostsync.ai</a></p>
              </div>
              <p className="text-sm text-[#F8F9FA]/60 mt-4">
                <strong>Note:</strong> These terms are effective as of the date of publication. GhostSync reserves the right to update these terms from time to time. Continued use of our services after any changes constitutes acceptance of the new terms.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 