import Link from "next/link";
import { useSelector } from "react-redux";
import StateLayout from "../../components/layout/StateLayout";
import { RootState } from "../../redux/store";

const CounterChildPage = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  return <div>Child state : {count}</div>;
};
CounterChildPage.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <StateLayout>
      {page}
      <p>
        <Link href={"/layout/"}>
          <a>Link to parent</a>
        </Link>
      </p>
    </StateLayout>
  );
};

export default CounterChildPage;
