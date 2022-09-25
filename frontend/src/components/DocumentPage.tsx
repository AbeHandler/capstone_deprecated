import {
  Paper, Popper, Button, Typography, Grow,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { VirtualElement } from '../types/types';
import detectHighlight from '../logic/detectHighlight';

function documentPage() {
  // -----
  // STATE VARS
  // -----
  const [
    selectionVirtualElement,
    setSelectionVirtualElement,
  ] = useState<VirtualElement | undefined>();

  // -----
  // USE EFFECT
  // -----
  // Add the event listener for highlighted text to the window on load
  useEffect(() => {
    window.addEventListener('mouseup', (event) => {
      setSelectionVirtualElement(detectHighlight(event, window));
    });
  }, []);

  // -----
  // COMPONENT
  // -----
  return (
    /* This box should probably be removed in favor of just a
    global css setting, but for now it works */
    <Box
        sx={{
          pt: 5,
        }}
    >
        {/* Handles Pop-up 'Tag' Menu */}
        <Popper
            className='popper-root'
            open={selectionVirtualElement !== undefined}
            placement='top'
            anchorEl={selectionVirtualElement}
            >
                {/* Transition the Tag Menu in */}
                <Grow in={true}>
                    <Paper
                        elevation={3}
                        sx={{
                          padding: 1,
                        }}
                    >
                        {/* Main 'Tag' Button */}
                        <Button
                            variant="text"
                        >
                            Tag
                        </Button>
                    </Paper>
                </Grow>
            </Popper>
        {/* Main "Document View" */}
        <Box
            sx={{
              width: '50%',
              aspectRatio: '16 / 22',
              margin: 'auto',
            }}
        >
            <Paper
                elevation={3}
                sx={{
                  width: '100%',
                  height: '100%',
                  p: 5,
                  display: 'inline-block',
                }}
            >
                {/* Main Content */}
                <Typography>
                    {/* eslint-disable-next-line max-len */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum id justo at auctor. Suspendisse at dui risus. Cras condimentum neque a nisi maximus aliquam. Cras non feugiat nunc. Sed non libero gravida, consectetur metus id, iaculis quam. Donec eget nibh ac risus ornare sagittis quis a quam. Curabitur elementum laoreet elit, nec dapibus velit dapibus vitae. Phasellus pellentesque, risus at sollicitudin convallis, urna urna rutrum ligula, sit amet elementum urna mi in arcu. Nulla hendrerit iaculis augue, molestie tristique odio molestie a. Pellentesque pellentesque ut mauris in eleifend. Sed eget convallis diam. Donec id porttitor ipsum. Aliquam sed dapibus ante, lobortis consectetur nunc. Quisque dictum enim sit amet enim fringilla consequat. Nam aliquet, est id congue rutrum, ex arcu dignissim risus, id volutpat tortor orci sit amet massa. Nam eu enim feugiat, accumsan magna in, consectetur ligula.
                    <br /><br />
                    {/* eslint-disable-next-line max-len */}
                    In ullamcorper, diam nec dignissim ornare, nulla mauris faucibus mauris, at gravida enim tellus at lorem. Integer a facilisis augue, vitae vulputate mauris. Quisque vitae imperdiet neque. In ut consequat odio. Nulla eget erat nec ligula finibus posuere. Nam lacus elit, varius nec laoreet eget, sollicitudin in metus. Fusce in rhoncus turpis, eu placerat augue. Curabitur scelerisque dolor vel nunc ornare, vel condimentum arcu viverra. Aliquam et pretium justo, quis rhoncus risus. Sed sit amet turpis urna. Suspendisse potenti.
                    <br /><br />
                    {/* eslint-disable-next-line max-len */}
                    Integer urna urna, fermentum et vehicula vehicula, aliquet sed elit. Etiam ullamcorper, ipsum sed congue sollicitudin, nisi nulla efficitur tellus, at venenatis metus ex et magna. In finibus ipsum ac odio rutrum fermentum. Quisque malesuada eget dolor ut vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis vitae justo velit. Sed lacus neque, dapibus a elementum eget, rhoncus et augue.
                    <br /><br />
                    {/* eslint-disable-next-line max-len */}
                    Sed ut suscipit orci. Aliquam lorem nisl, sagittis a rutrum at, vestibulum nec orci. Mauris tristique porttitor risus, non tristique nisl bibendum eget. In congue tristique sapien et egestas. Nam vehicula mi vitae commodo elementum. Maecenas eu nibh vel dolor gravida molestie. Integer non cursus dolor. Maecenas sagittis dui sit amet nunc egestas maximus a eu est.
                </Typography>
            </Paper>
        </Box>
    </Box>
  );
}

export default documentPage;
