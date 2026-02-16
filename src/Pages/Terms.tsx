import Chatbot from "../components/Chatbot";

const Terms = () => {
  return (
    <section className="overflow-hidden">
      <div className="flex-col flex items-center justify-center px-5 md:px-10 w-screen">
        <div className="flex-col flex w-screen  items-center bg-orange-100 py-8 lg:py-2 ">
          <div className="grid max-w-5xl flex-col items-start max-[991px]:min-w-full max-[991px]:gap-y-10 max-[767px]:gap-y-8 max-[479px]:gap-y-7 max-[991px]:px-10 max-[767px]:px-5 grid-cols-1 lg:grid-cols-2">
            <div className="flex-col flex items-start gap-y-4 self-center max-[991px]:max-w-[70%] max-[479px]:max-w-full py-5">
              <h1 className="font-bold text-3xl md:text-5xl">
                Terms of Service
              </h1>
              <div className="flex-col text-[#808080] text-sm sm:text-base">
                Read our terms below to learn more about your rights and
                responsibilities as a Tulet Oaks Customer.
              </div>
            </div>
            <div className="flex lg:max-w-[600px] w-[450px] items-center justify-center object-cover  lg:min-h-[400px]">
              <img
                src="https://media.edgeprop.my/s3fs-public/editorial/my/2023/May/13/propertiesinfocus.jpeg"
                alt=""
                className="inline-block w-[100%] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="py-12 md:py-16 lg:py-20 mx-auto w-full max-w-5xl">
          <div className="flex-col flex min-w-full items-start gap-y-10">
            <div className="flex-col flex max-w-[80%] items-start [border-bottom:1px_solid_rgb(226,_226,_226)] max-[479px]:max-w-none py-4 min-w-full sm:min-w-[80%]">
              <h6 className="text-base font-extrabold">
                LAST UPDATED AS OF OCTOBER 17, 2023
              </h6>
            </div>
            <div className="flex-col flex items-start gap-y-10 sm:gap-y-[46px]">
              <div className="flex-col flex min-w-full items-start gap-y-6">
                <div className="flex-col flex items-start gap-y-3">
                  <div className="font-bold text-sm sm:text-sm uppercase">
                    Acceptance of Terms
                  </div>
                  <p className="text-sm sm:text-sm">
                    By accessing or using our real estate services, you agree to
                    abide by these terms and conditions. If you do not agree,
                    please refrain from using our services.
                  </p>
                </div>
                <div className="flex-col flex items-start gap-y-3">
                  <div className="font-bold text-sm sm:text-sm uppercase">
                    Use of Real Estate Services
                  </div>
                  <p className="text-sm sm:text-sm">
                    You must use our real estate services in compliance with all
                    applicable laws and regulations. Any misuse or illegal
                    activity is strictly prohibited.
                  </p>
                </div>
                <div className="flex-col flex items-start gap-y-3">
                  <div className="font-bold text-sm sm:text-sm uppercase">
                    Privacy and Data Handling
                  </div>
                  <p className="text-sm sm:text-sm">
                    Your use of our real estate services is also governed by our
                    Privacy Policy. We take your privacy seriously and will
                    handle your data as outlined in our policy.
                  </p>
                </div>
                <div className="flex-col flex items-start gap-y-3">
                  <div className="font-bold text-sm sm:text-sm uppercase">
                    User Account
                  </div>
                  <p className="text-sm sm:text-sm">
                    To access certain real estate features, you may need to
                    create a user account. You are responsible for maintaining
                    the confidentiality of your real estate account information.
                  </p>
                </div>
                <div className="flex-col flex items-start gap-y-3">
                  <div className="font-bold text-sm sm:text-sm uppercase">
                    Property Listings and Content
                  </div>
                  <p className="text-sm sm:text-sm">
                    All real estate property listings and related content on our
                    platform are our property or licensed to us. You may not use
                    our real estate content without permission
                  </p>
                </div>
                <div className="flex-col flex items-start gap-y-3">
                  <div className="font-bold text-sm sm:text-sm uppercase">
                    Prohibited Conduct
                  </div>
                  <p className="text-sm sm:text-sm">
                    You agree not to engage in activities that could disrupt or
                    harm our real estate services, including but not limited to
                    misrepresentation, spam, or fraudulent listings.
                  </p>
                </div>
                <div className="flex-col flex items-start gap-y-3">
                  <div className="font-bold text-sm sm:text-sm uppercase">
                    Termination of Real Estate Services
                  </div>
                  <p className="text-sm sm:text-sm">
                    We reserve the right to suspend or terminate your access to
                    our real estate services at our discretion, without notice,
                    if you violate these terms. We are not liable for any direct
                    or indirect damages, including loss of real estate
                    opportunities or profits, arising from your use of our real
                    estate services.
                  </p>
                </div>
                <div className="flex-col flex items-start gap-y-3">
                  <div className="font-bold text-sm sm:text-sm uppercase">
                    Real Estate Disclaimers
                  </div>
                  <p className="text-sm sm:text-sm">
                    We provide our real estate services "as is" and make no
                    warranties or guarantees regarding the accuracy of property
                    listings. Use our services to facilitate real estate
                    transactions at your own risk.
                  </p>
                </div>
              </div>
              <div className="min-h-[1px] min-w-full bg-[#e2e2e2]"></div>
              <p className="text-sm sm:text-sm">
                Please read these real estate terms carefully, and if you have
                any questions or concerns related to our real estate services,
                don't hesitate to contact us. Your use of our real estate
                services is subject to these conditions, and they may be updated
                periodically, so be sure to check for any changes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Chatbot />
    </section>
  );
};

export default Terms;
