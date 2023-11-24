import Layout from "../../components/layout";

const RefundCancellationPolicy = () => {
  return (
    <Layout>
      <div className="flex px-4 tablet:px-[8rem] bg-mistGray pt-[4rem] pb-[6rem] mt-[6rem]">
        <div className="flex flex-col gap-4 rounded-lg p-6 shadow-lg bg-white">
          <h1 className="!text-2xl">
            <strong>Cancellation & Refund Policy</strong>
          </h1>
          <p>
            We at Go Vahan believe in helping our customers as far as possible
            therefore we have a liberal cancellation and refund policy.
          </p>
          <strong>1. If User cancel their booking</strong>
          <p>
            - There will be no refund if users cancel the booking before the
            time slot chosen by themselves.
          </p>
          <p>
            - Users will be eligible for 100% refund of their payment if they
            cancel after 30 minutes of their given time slot, only if the
            vehicle doesn't reach to the user's pickup location.
          </p>
          <p>
            - There will be no refunds if users cancel their booking in any
            other circumstances.
          </p>

          <strong>2. If Drivers cancel the booking</strong>
          <p>
            - Users will be eligible for 100% refund if the booking is cancelled
            by the drivers before the given time slots.
          </p>
          <strong>3. Refund and its status</strong>
          <p>- All the refunds will be credited in users in app wallet.</p>
          <p>- Refunds may take up to 3 days to credit in users wallet.</p>
        </div>
      </div>
    </Layout>
  );
};
export default RefundCancellationPolicy;
