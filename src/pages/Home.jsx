// import Card from "components/Card";
import Layout from "../components/Layout";
import TaskManager from "../components/TaskManager";
import ApiData from "../components/ApiData";
export default function Home() {
    return (
      <div className="text-center mt-10">
        <TaskManager />
        <Card />
      </div>
    );
  }
  