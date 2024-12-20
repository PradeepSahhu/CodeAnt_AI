const SignInOptions = ({ name, logo }) => {
  return (
    <button className="border-[1px] border-[#D8DAE5] bg-white rounded-[8px] px-[160px] py-[16px] text-[#171717] flex items-center w-[446px] align-center gap-[16px] text-center">
      <img className="w-[25px] h-[25px] " src={`${logo}`} />
      <p className="font-[600] text-[16px] leading-[24px] w-[146px] h-[24px] whitespace-nowrap">{`${name}`}</p>
    </button>
  );
};

const SelfHosted = () => {
  return (
    <div className="flex flex-col justify-center items-center border-[1px] border-[#E9EAEB] font-[inter] gap-y-[16px] py-5 rounded-xl">
      <SignInOptions name={"Self Hosted GitLab"} logo={"./image_1.png"} />
      <SignInOptions name={"Sign in with SSO"} logo={"./key.png"} />
    </div>
  );
};

const SignIn = () => {
  return (
    <div className="flex flex-col justify-center items-center border-[1px] border-[#E9EAEB] font-[inter] gap-y-[16px] py-5 rounded-xl">
      <SignInOptions name={"Sign in with Github"} logo={"./icon.png"} />
      <SignInOptions name={"Sign in with Bitbucket"} logo={"./icon_2.png"} />
      <SignInOptions name={"Sign in with Azure Devops"} logo={"./image.png"} />
      <SignInOptions name={"Sign in with GitLab"} logo={"./image_1.png"} />
    </div>
  );
};

export { SignIn, SelfHosted };
