import { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableHeader, TableRow, TableCell, TableBody } from "grommet";

const HighScore = () => {
  const [highScore, setHighScore] = useState("");
  const [loading, setLoading] = useState(false);
  const url = "https://poke-fights-app.herokuapp.com/fights";

  useEffect(() => {
    setLoading(true);
    axios.get(url)
      .then(response => {
        console.log(response.data);
        setHighScore(response.data);
      })
      .catch(error => alert(error));
  }, []);

  return highScore ? (
    <div className="high-score">
      <h3>Check out the High Scores!</h3>
      <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Player</TableCell>
          <TableCell>Pokémon</TableCell>
          <TableCell>Score</TableCell>
          <TableCell>Rounds</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {highScore.map(fight => (
          <TableRow key={fight._id}>
            <TableCell>{fight.name}</TableCell>
            <TableCell>{fight.pokename}</TableCell>
            <TableCell>{fight.score}</TableCell>
            <TableCell>{fight.numberofrolls}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  ) : (
    "Loading..."
  );
};

export default HighScore;
