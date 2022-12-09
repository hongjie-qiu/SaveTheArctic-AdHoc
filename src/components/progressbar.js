import ProgressBar from 'react-bootstrap/ProgressBar';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

function Bar() {
  let point = 0;
  const db = getDatabase();
  let userId = getAuth().currentUser.uid;
  const userInfo = ref(db, "users/" + userId);
  onValue(userInfo, (snapshot) => {
    point = snapshot.val().points;
  });

  if (point >= 100) {
    point = point % 100;
  }
  const progress = 100 - point;

  return (
    <div>
      <ProgressBar variant="info" now={point} label={`${point}%`} />
      <p id="pointNotification">{progress} points to your next free donation!</p>
    </div>
  );
}

export default Bar;