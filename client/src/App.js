import axios from "axios";
import {
  Button,
  Card,
  Modal,
  Input,
  Calendar,
  MiniCalendar,
  Grid,
  Container,
  Box,
} from "wss3-forge";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Cricket</p>
        <Card padding="lg">
          <Button variant="primary">Calender</Button>
        </Card>

        <Grid columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} gap="md">
          <Card>
            <p>Tony Stark</p>
            <p>Senior Developer</p>
          </Card>

          <Card>
            <p>Weekly Overview:</p>
            <p>100 hours</p>
          </Card>

          <Card>Item 3</Card>

          <Card>Item 4</Card>
        </Grid>

        <MiniCalendar
          selectedDate={new Date()}
          onDateSelect={(date) => console.log(date)}
        />
      </header>
    </div>
  );
}

export default App;
