import axios from "axios";
import { Task, } from "../../domain/interface/task";

export const fetchAllTasks = async ()
:Promise<Task[]> => {
    try {
      const res = await fetch(
        `http://localhost:8080/api/tasks`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((res) => res.json());
      return res;

    } catch (error) {
      throw error ;
    }
};
