import { ArrowForward, Info } from '@mui/icons-material';
import { Box, Button, Typography, FormControl,FormLabel,FormControlLabel, Radio, RadioGroup, TextField, Tooltip } from '@mui/material';
import * as React from 'react';

import { EcoChampion } from '@Utilities';

export const SignUp: React.FC = (): JSX.Element => {
	return <Box sx={
		{ width: '100%',
			marginTop: '5rem',
			display: 'flex',
			flexDirection: 'row',
			paddingBottom: '5rem'
		}
	}>
		<Box sx={
			{ width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				gap: '5rem'
			}
		}>
			<Typography variant='h1' sx={{ lineHeight: '4rem', textAlign: 'center', }}>SignUp</Typography>
			<FormControl sx={{ width: '50%', marginX: 'auto', gap: '2rem' }}>
				<TextField
					id="outlined-name"
					label="Firstname"
					type='text'
					helperText="Hello"
				/>
				<TextField
					id="outlined-name"
					label="Lastname"
					type='text'
					helperText="Hello"
				/>
				<TextField
					id="outlined-name"
					label="Email"
					type='email'
					helperText="Hello"
				/>
				<TextField
					id="outlined-name"
					label="Phone number"
					type='tel'
					helperText="Hello"
				/>
				<TextField
					id="outlined-name"
					label="Password"
					helperText="Hello"
					type='password'
				/>
				<TextField
					id="outlined-name"
					label="Confirm password"
					helperText="Hello"
					type='password'
				/>

				<>
					<FormLabel id="demo-radio-buttons-group-label">Which category of EcoChampions best describe you? <Tooltip title="Specifies the type of activity you want to perform in the accoun."><Info fontSize='small'/></Tooltip></FormLabel>
					<RadioGroup
						aria-labelledby="demo-radio-buttons-group-label"
						defaultValue="female"
						name="radio-buttons-group"
					>
						<FormControlLabel value={EcoChampion.ECO_COLLECTOR} control={<Radio />} label="Collector" />
						<FormControlLabel value={EcoChampion.ECO_PROCESSOR} control={<Radio />} label="Processor" />
					</RadioGroup>
				</>
				<Button
					endIcon={<ArrowForward/>}
					variant='contained'
					size="large"
					sx={{ width: 'content', marginX: 'auto' }}
				>
                    Signup
				</Button>
			</FormControl>
		</Box>
	</Box>;
};