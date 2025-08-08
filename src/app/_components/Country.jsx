const Countryy = (props) => {
  const FlagUrl = props.FlagUrl;
  const Name = props.Name;
  return (
    <div className=" p-3 flex m-3 flex-col gap-2 justify-center items-center shadow-md w-fit h-fit">
      <img src={FlagUrl} className="w-100 h-50" />
      <div className="text-[20px] font-medium">{Name}</div>
    </div>
  );
};
export default Countryy;
