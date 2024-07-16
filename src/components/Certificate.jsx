import React, { useState, useEffect } from 'react';
import { Box, Card, TextField, Typography, Button, Snackbar, Alert } from '@mui/material';
import { connect } from 'react-redux';
import SchoolIcon from '@mui/icons-material/School';
import { setCertificates, updateCertificates } from '../Redux/actions/setcertificate';
import { useForm } from 'react-hook-form';

const CertificateSection = (props) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [certificates, setCertificatesState] = useState([{ certificateName: '', issuingOrganization: '', issueDate: '', expirationDate: '' }]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (props.certificates) {
      setCertificatesState(Object.values(props.certificates));
    }
  }, [props.certificates]);

  useEffect(() => {
    certificates.forEach((item, key) => {
      setValue(`certificates[${key}].certificateName`, item.certificateName);
      setValue(`certificates[${key}].issuingOrganization`, item.issuingOrganization);
      setValue(`certificates[${key}].issueDate`, item.issueDate);
      setValue(`certificates[${key}].expirationDate`, item.expirationDate);
    });
  }, [setValue, certificates]);

  const addNewCertificate = () => {
    setCertificatesState([...certificates, { certificateName: '', issuingOrganization: '', issueDate: '', expirationDate: '' }]);
  };

  const deleteCertificate = (key) => {
    const updatedCertificates = certificates.filter((_, index) => index !== key);
    setCertificatesState(updatedCertificates);
  };

  const handleChange = (event, title, key) => {
    const updatedCertificates = certificates.map((item, index) => 
      index === key ? { ...item, [title]: event.target.value } : item
    );
    setCertificatesState(updatedCertificates);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = handleSubmit((data) => {
    if (props.certificates !== null) {
      props.updateCertificates(data.certificates);
    } else {
      props.setCertificates(data.certificates);
    }
    setOpen(true);
  });

  return (
    <>
      <div className="w-full lg:w-[55vw] lg:ml-[10vw] md:w-[70vw] md:ml-[15vw] sm:w-[100vw] justify-center items-center mt-10">
        <Box>
          <Typography className="mt-4 font-bold text-2xl text-center md:text-1xl" variant="h4">
            <SchoolIcon /> Certificate Details:
          </Typography>
          {certificates.map((item, key) => (
            <div key={key}>
              <Card style={{ borderRadius: '5px', border: '2px solid', backgroundColor: 'rgb(255, 255, 255)', padding: '2vw 5vw' }}>
                <Typography style={{ color: 'black', marginBottom: '3vw' }} variant="h6">
                  {`Certificate ${key + 1}`}
                </Typography>
                <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4 mx-auto">
                  <TextField
                  id={`certificateName-${key}`}
                    label="Certificate Name"
                    variant="outlined"
                    {...register(`certificates[${key}].certificateName`, { required: true })}
                    value={item.certificateName}
                    error={errors?.certificates && errors.certificateName[key]?.certificateName}
                    helperText={errors?.certificates && errors.certificates[key]?.certificateName && 'Certificate Name is required'}
                    onChange={(e) => handleChange(e, 'certificateName', key)}
                  />
                  <TextField
                  id={`issueOrganization-${key}`}
                    label="Issuing Organization"
                    variant="outlined"
                    {...register(`certificates[${key}].issuingOrganization`, { required: true })}
                    value={item.issuingOrganization}
                    error={errors?.certificates && errors.issuingOrganization[key]?.issuingOrganization}
                    helperText={errors?.certificates && errors.issuingOrganization[key]?.issuingOrganization && 'Issuing Organization is required'}
                    onChange={(e) => handleChange(e, 'issuingOrganization', key)}
                  />
                </Box>
                <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4 mx-auto max-w-5xl mt-8">
                  <TextField
                    type="date"
                    id={`issueDate-${key}`}
                    label="Issue Date"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...register(`certificates[${key}].issueDate`, { required: true })}
                    value={item.issueDate}
                    error={errors?.certificates && errors.certificates[key]?.issueDate}
                    helperText={errors?.certificates && errors.certificates[key]?.issueDate && 'Issue Date is required'}
                    onChange={(e) => handleChange(e, 'issueDate', key)}
                  />
                  <TextField
                    type="date"
                    id={`expirationDate-${key}`}
                    label="Expiration Date"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...register(`certificates[${key}].expirationDate`, { required: true })}
                    value={item.expirationDate}
                    error={errors?.certificates && errors.certificates[key]?.expirationDate}
                    helperText={errors?.certificates && errors.certificates[key]?.expirationDate && 'Expiration Date is required'}
                    onChange={(e) => handleChange(e, 'expirationDate', key)}
                  />
                </Box>
                {key === certificates.length - 1 && (
                  <Typography onClick={addNewCertificate} style={{ margin: '10px', color: 'blue', cursor: 'pointer' }}>
                    Add New
                  </Typography>
                )}
                {certificates.length > 1 && (
                  <Typography onClick={() => deleteCertificate(key)} style={{ margin: '10px', color: 'blue', cursor: 'pointer' }}>
                    Delete
                  </Typography>
                )}
                {key === certificates.length - 1 && (
                  <div style={{ marginTop: '2vh' }}>
                    <Button style={{ backgroundColor: 'green', color: '#fff', marginLeft: '40%', width: '20%' }} type="submit" onClick={onSubmit}>
                      {props.certificates ? 'Update' : 'Submit'}
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          ))}
        </Box>
      </div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Certificate Details Submitted!
        </Alert>
      </Snackbar>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    certificates: state.certificateReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCertificates: (certificates) => dispatch(setCertificates(certificates)),
    updateCertificates: (certificates) => dispatch(updateCertificates(certificates)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CertificateSection);
