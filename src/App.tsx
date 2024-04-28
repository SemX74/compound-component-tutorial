import { useCallback, useEffect, useState } from "react";
import { TUser } from "./types/TUser";
import { getUsers } from "./utils/getUsers";
import Popover from "./components/Popover/Popover";
import "./App.css";

function App() {
  const [data, setData] = useState<TUser[]>([]);

  const applyData = useCallback(async () => {
    const data = await getUsers();
    setData(data);
  }, []);

  useEffect(() => {
    applyData();
  }, [applyData]);

  return (
    <div>
      <Popover className="relative">
        <Popover.Button>Popover!</Popover.Button>
        <Popover.List>
          {data.map((x) => (
            <Popover.ListItem key={x.firstname}>
              {x.firstname} {x.lastname}
            </Popover.ListItem>
          ))}
        </Popover.List>
      </Popover>
    </div>
  );
}

export default App;
