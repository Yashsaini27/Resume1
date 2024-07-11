import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container } from '@mui/material';
import Header from '../../components/Header';
import TempleteCard from './TempleteCard';
import temp from '../../Data/data';
import { settemplate, updatetemplate } from '../../Redux/actions/settemplate';

// Swiper modules
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    textAlign: 'center',
  },
  subheader: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
  },
  swiperContainer: {
    maxWidth: '40%',
    height: '700px', // Set the desired height here
    margin: 'auto', // Center horizontally
    marginBottom: theme.spacing(8),
    position: 'relative',
  },
}));

function Templetes(props) {
  const classes = useStyles();

  // State to hold the templates
  const [templates, setTemplates] = useState(temp);

  return (
    <>
      {/* Header Component for Navigation */}
      <Header />
      <Container>
        <Typography variant="h3" className={classes.header}>
          Templates
        </Typography>
       
        <div className={classes.swiperContainer}>
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            effect="coverflow"
            centeredSlides={true}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
          >
            {templates.map((template) => (
              <SwiperSlide key={template.key}>
                <TempleteCard
                  data={template.data}
                  thumbnail={template.thumbnail}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          {/* Render other template cards if needed */}
        </Grid>
      </Container>
    </>
  );
}

// Map the Redux state to component props
const mapStateToProps = (state) => {
  return {
    resume: state.templateReducer,
  };
};

// Map the Redux dispatch actions to component props
const mapDispatchToProps = (dispatch) => {
  return {
    settemplate: (template) => dispatch(settemplate(template)),
    updatetemplate: (template) => dispatch(updatetemplate(template)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Templetes);
