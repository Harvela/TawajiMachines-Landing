const Security = () => {
  return (
    <div className="relative h-[100vh]">
      <img
        src="/assets/images/home/security.jpg"
        alt="security"
        className="absolute left-0 top-0 h-[100vh] w-full object-cover transition-opacity duration-1000"
      />
      <div className="absolute left-0 top-0 flex h-[100vh] w-full flex-row items-center justify-center bg-primary-700/80">
        <h1 className="text-[48px] font-semibold text-white">Coming soon!</h1>
      </div>
    </div>
  );
};

export default Security;
