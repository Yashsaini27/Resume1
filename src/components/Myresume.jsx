import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Box, Button, Snackbar, Alert } from '@mui/material';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

function Myresume(props) {
  const savedresume = props.savedfile;
  const [isHovered, setIsHovered] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverExit = () => {
    setIsHovered(false);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const downloadResume = async () => {
    const input = document.getElementById('download');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        var width = pdf.internal.pageSize.getWidth();
        var height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
        pdf.save(`AlmabetterResume.pdf`);
        setOpenSnackbar(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      {/*Header Component for navigation */}
      <Header />
      {/* Main content */}
      <Box className="flex py-8 px-8 justify-center items-center relative" onMouseEnter={handleHover} onMouseLeave={handleHoverExit}>
        <div id="download">
          {savedresume !== null ? (
            <div style={{ opacity: isHovered ? 0.7 : 1 }}>{savedresume.data}</div>
          ) : (
            <img style={{ width: '15vw', marginTop: '10vw' }} alt="resume preview" />
          )}
        </div>
        {props.savedfile ? (
          <Button
            variant="contained"
            color="primary"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              alignItems: 'center',
            }}
            onClick={downloadResume} //Download the Document
            onMouseEnter={handleHover} // Handle hover enter event
            onMouseLeave={handleHoverExit} // Handle hover exit event
          >
            <CloudDownloadIcon /> Download
          </Button>
        ) : (
          ''
        )}
      </Box>
      {/* Snackbar for success message */}
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Resume Downloaded Successfully!
        </Alert>
      </Snackbar>
    </>
  );
}

// Mapping state from Redux to component props
const mapStateToProps = (state) => {
  return {
    savedfile: state.resumeReducer,
  };
};

// No actions required for this component

export default connect(mapStateToProps)(Myresume);
