import * as React from "react";
import { Grid } from "@material-ui/core";

export interface HangmanCoverupProps {
  xPos: number;
  yPos: number;
  width: number;
  height: number;
  shown: boolean;
  showBorder?: boolean;
}


class HangmanCoverup extends React.Component<HangmanCoverupProps> {
  constructor(props: HangmanCoverupProps){
    super(props);
    this.state = {shown: true};
  }

  render() {
    const {xPos, yPos, width, height, shown, showBorder} = this.props;
    if(!shown){
      return null;
    }
    return (
      <Grid style={{
        position: 'absolute',
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: 'white',
        color: 'white',
        left: `${xPos}px`,
        top: `${yPos}px`,
        border: showBorder ? '1px solid black' : '',
      }}>
        .
      </Grid>
    );
  }
}

export default HangmanCoverup;