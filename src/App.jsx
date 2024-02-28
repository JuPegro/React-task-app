import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-slate-200 w-full h-screen flex flex-col items-center">
      <div className="mt-6 w-10/12 h-4/6 flex flex-col items-center gap-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
