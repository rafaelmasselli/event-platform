import { gql, useQuery } from "@apollo/client";
import { Header } from "./components/Header";
import { Evento } from "./pages/Evento";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

export function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);

  return (
    <>
      <Evento/>
    </>
  );
}
