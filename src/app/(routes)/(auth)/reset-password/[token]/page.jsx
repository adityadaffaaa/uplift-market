import FormResetToken from "./components/FormResetToken";

const ResetPassword = ({ params }) => {
  return (
    <div className="w-full px-5 flex flex-col gap-9 max-w-md mx-auto md:max-w-2xl py-24">
      <article className="text-textBlack flex flex-col items-center">
        <h1 className="text-title">Reset Password</h1>

        <div className=" bg-green-100 rounded-xl">
          <p className="text-subtitle text-center text-primary p-4">
            Buat password kuat dengan gabungan huruf besar-
            <br className="hidden lg:block" />
            kecil, angka, dan simbol, hindari info pribadi.
          </p>
        </div>
      </article>
      <section className="flex flex-col items-center gap-9 mt-4 md:bg-white md:p-9 md:rounded-lg">
        <hr className="w-full" />
        <FormResetToken token={params.token} />
      </section>
    </div>
  );
};

export default ResetPassword;
