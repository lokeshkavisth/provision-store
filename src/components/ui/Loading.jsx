import BarLoader from "react-spinners/BarLoader";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="text-center">
        <BarLoader color="#0000FF" />
        <p>Please Wait</p>
      </div>
    </div>
  );
};

export default Loading;
