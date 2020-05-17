import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import { Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 5
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

interface IChoreCardProps {
  completed: boolean;
  description: string | null;
  index: number;
  name: string;
  id: any;
}

function ChoreCard({ completed, description, index, name, id }: IChoreCardProps) {
  const classes = useStyles();

  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <Grid ref={provided.innerRef} {...provided.draggableProps}
        {...provided.dragHandleProps}>
          <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
      )}
    </Draggable>
  );
}

export default ChoreCard;