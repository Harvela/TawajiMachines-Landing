import ReCAPTCHA from 'react-google-recaptcha';

export const Recaptcha: React.FC<{ onChange: any }> = (props) => {
  function onChange(value: any) {
    props.onChange(!!value);
  }
  return (
    <div
      className="fixed left-0 top-0 z-[100000] flex h-full w-full items-center justify-center bg-black/50 "
      onClick={() => {
        onChange(null);
      }}
    >
      <ReCAPTCHA
        sitekey={'6LfwiwkqAAAAALM6HnhDAUYjGqpVjLajdQsxp2Sl'}
        onChange={onChange}
        onError={() => onChange(null)}
        onAbort={() => onChange(null)}
      />
    </div>
  );
};
