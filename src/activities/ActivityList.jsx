import { deleteActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";
// import { usePage } from "../layout/PageContext";
export default function ActivityList({ activities, syncActivities }) {
  const { token } = useAuth();
  // const { setPage } = usePage();

  const removeAndReturn = async (id) => {
    try {
      await deleteActivity(token, id);
      await syncActivities();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ul>
      {activities.map((activity) => (
        <li key={activity.id}>
          {activity.name}
          <button
            onClick={() => {
              removeAndReturn(activity.id);
            }}
          >
            Remove Activity
          </button>
        </li>
      ))}
    </ul>
  );
}
