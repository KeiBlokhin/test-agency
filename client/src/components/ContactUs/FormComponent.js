import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import Button from '../Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import styles from './styles'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  fullName: yup.string().required('Full name is required'),
  message: yup.string().min('20', 'Too Short!'),
})

const FormComponent = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(`Email: ${values.email} from ${values.fullName}`)
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={styles.input}>
        <TextField
          id='fullName'
          name='fullName'
          value={formik.values.fullName}
          onChange={formik.handleChange}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={
            formik.touched.fullName && formik.errors.fullName
              ? formik.touched.fullName && formik.errors.fullName
              : ' '
          }
          placeholder='Full name'
          sx={styles.textField}
          InputProps={{ style: { fontSize: '16px' } }}
        />
        <TextField
          id='email'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={
            formik.touched.email && formik.errors.email
              ? formik.touched.email && formik.errors.email
              : ' '
          }
          placeholder='Email '
          sx={styles.textField}
          InputProps={{ style: { fontSize: '16px' } }}
        />
      </Box>
      <TextareaAutosize
        minRows={6}
        id='message'
        name='message'
        value={formik.values.message}
        onChange={formik.handleChange}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={
          formik.touched.message && formik.errors.message
            ? formik.touched.message && formik.errors.message
            : ' '
        }
        placeholder='write message'
        style={styles.textareaAutosize}
      />
      <Button type={'submit'}>
        send us message <ArrowForwardIosIcon />
      </Button>
    </form>
  )
}

export default FormComponent
