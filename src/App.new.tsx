import React, { ChangeEvent, useState } from 'react';
import { AppBar, Box, Grid, Tab, Tabs, Typography } from '@material-ui/core';
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { AddChoreForm, IncompleteByDay } from './components';
import { a11yProps } from './utils';

import { useStyles } from './App.styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: any;
}

const initial = Array.from({ length: 10 }, (v, k) => k).map(k => {
  const custom = {
    id: `id-${k}`,
    content: `Quote ${k}`
  };

  return custom;
});

const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// function Quote({ quote, index }: {quote: any, index: any}) {
//   return (
//     <Draggable draggableId={quote.id} index={index}>
//       {provided => (
//         <Grid ref={provided.innerRef} {...provided.draggableProps}
//         {...provided.dragHandleProps}>
//           {quote.content}
//         </Grid>
//       )}
//     </Draggable>
//   );
// }

// const QuoteList = React.memo(function QuoteList({ quotes }: { quotes: any }) {
//   return quotes.map((quote: any, index: any) => (
//     <Quote quote={quote} index={index} key={quote.id} />
//   ));
// });

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function App() {
  const classes = useStyles();
  const [tab, setTabValue] = useState(0);
  const [state, setState] = useState<any>({ quotes: initial });

  const handleChange = (event: ChangeEvent<{}>, newTab: number) => {
    setTabValue(newTab);
  };

  function onDragEnd(result: any) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const quotes = reorder(
      state.quotes,
      result.source.index,
      result.destination.index
    );

    setState({ quotes });
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={tab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Monday" {...a11yProps(0)} />
          <Tab label="Tuesday" {...a11yProps(1)} />
          <Tab label="Wednesday" {...a11yProps(2)} />
          <Tab label="Thursday" {...a11yProps(3)} />
          <Tab label="Friday" {...a11yProps(4)} />
          <Tab label="Saturday" {...a11yProps(5)} />
          <Tab label="Sunday" {...a11yProps(6)} />
          <Tab label="Add A Chore" {...a11yProps(7)} />
        </Tabs>
      </AppBar>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container justify="center">
          <Grid item className={classes.incomplete}>

            <TabPanel value={tab} index={0}>
              <Droppable droppableId="list">
                {provided => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {provided.placeholder}
                    <IncompleteByDay day="monday" />
                  </div>
                )}
              </Droppable>
            </TabPanel>
            <TabPanel value={tab} index={1}>
              <IncompleteByDay day="tuesday" />
            </TabPanel>
            <TabPanel value={tab} index={2}>
              <IncompleteByDay day="wednesday" />
            </TabPanel>
            <TabPanel value={tab} index={3}>
              <IncompleteByDay day="thursday" />
            </TabPanel>
            <TabPanel value={tab} index={4}>
              <IncompleteByDay day="friday" />
            </TabPanel>
            <TabPanel value={tab} index={5}>
              <IncompleteByDay day="saturday" />
            </TabPanel>
            <TabPanel value={tab} index={6}>
              <IncompleteByDay day="sunday" />
            </TabPanel>
            <TabPanel value={tab} index={7}>
              <AddChoreForm />
            </TabPanel>
          </Grid>

          <Grid item className={classes.complete}>
            <Droppable droppableId="list">
              {provided => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  hello
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Grid>
        </Grid>
      </DragDropContext>
    </div>
  );
}