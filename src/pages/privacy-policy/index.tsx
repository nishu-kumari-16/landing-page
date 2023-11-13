import Layout from "../../components/layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="flex px-4 tablet:px-[8rem] bg-mistGray pt-[4rem] pb-[6rem] mt-[6rem]">
        <div className="flex flex-col gap-4 rounded-lg p-6 shadow-lg bg-white">
          <h2>
            <strong>GoVahan Privacy Policy</strong>
          </h2>
          <p>
            {` At Go Vahan carrier Pvt Ltd., (Operated under the brand of Go Vahan), we are dedicated to protect your personal
                information and informing you upfront about how we use the information. This privacy policy applies to all data
                gathered, and all transactions supported through the Go Vahan application and services. This policy describes the
                personal data we collect, how it’s used and shared, and your choices regarding this data.Please review this privacy policy
                periodically as we may revise it as and when required without notice. Each time you use the Go Vahan platform or
                provide us with information, it is assumed by default that you are accepting the practices and conditions described in this
                privacy policy.`}
          </p>
          <strong>Scope</strong>
          <p>
            This policy applies to users of Go Vahan services anywhere in India,
            including users of Go Vahan apps, websites, features, or other
            services.
          </p>
          <p>
            This policy describes how Go Vahan and its affiliates collect and
            use personal data. This policy applies to all users of our apps,
            websites, features, or other services anywhere in India.
          </p>
          <p>
            The data which we collect from our Users: To operate Go Vahan
            services and to provide User with the information about products or
            services that may be of interest to him, Go Vahan may collect
            “personal information” of the User. You represent and warrant that
            you have the authority to provide us with any such information.
          </p>
          <strong>{`Go Vahan collects and stores the following User’s data:`}</strong>
          <p>
            {`Data provided by users to Go Vahan , such as name, gender, contact
          number, device used, etc., during signing up / account creation and
          profile verification.`}
          </p>
          <p>
            {` Data created during use of our products and services, such as
          location, route chosen, start and end timings, app usage, and device
          data.`}
          </p>
          <p>Data from other sources, such as Go Vahan partners .</p>
          <p>Data provided by users to Go Vahan includes</p>
          <p>
            {`User profile: When user create/update his account with Go Vahan , we
          collect data about the user including but not limited to name, email,
          gender, phone number, profile picture. We also collect the Payment
          method information (Wallet linking, Credit card, Debit card, etc.,)
          and Redemption information (choice of redemption mechanism like Bank
          information, wallets, etc.,`}
          </p>
          <p>
            {` User profile Verification: To verify user profile, we collect Company
          official email id, Driver’s Licence, Government identification
          document such as Aadhaar card details, etc.,`}
          </p>
          <p>
            {` Vehicle information such as Model, Type, Registration number, Picture
          etc., are collected`}
          </p>
          <p>
            {`Emergency contact information : The contact details of emergency
          contact as given by user`}
          </p>
          <p>
            {` Demographic data: We may collect demographic data about users,
          including through user surveys. In some countries, we may also receive
          demographic data about users from third parties/tools.`}
          </p>
          <p>
            {` User Feedback: We collect and store user feedback on other users and
          Go Vahan products and services and store the same.`}
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default PrivacyPolicy;
