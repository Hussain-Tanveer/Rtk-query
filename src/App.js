import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "./RtkQuery/apiSlice";

function App() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const { singleData, SingleDataError, SingleDataIsLoading } =
    useGetProductQuery("1");
  console.log(data, "data only----------------");
  console.log(singleData, "single data only----------------");
  return <div></div>;
}

export default App;
