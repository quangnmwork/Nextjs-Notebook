import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StateLayout from "../../components/layout/StateLayout";
import { increment } from "../../redux/counterSlice";
import { RootState } from "../../redux/store";

const CounterPage = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Counter Page</p>
      <button
        className="bg-blue-400 p-3 text-lg text-white"
        onClick={() => {
          dispatch(increment());
        }}
      >
        Click me
      </button>

      <p>Current number : {count}</p>
      <Link href={"/layout/child"}>
        <a>Link to child</a>
      </Link>
    </div>
  );
};
CounterPage.getLayout = function getLayout(page: React.ReactNode) {
  return <StateLayout>{page}</StateLayout>;
};

export default CounterPage;
