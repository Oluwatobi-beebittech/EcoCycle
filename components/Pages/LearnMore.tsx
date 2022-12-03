import { ShoppingCartCheckout, ConfirmationNumber, Redeem, Public, LightbulbOutlined } from '@mui/icons-material';
import { Button, Box, Grid, Typography } from '@mui/material';
import * as React from 'react';

export const LearnMore: React.FC = (): JSX.Element => {
	return <Box sx={
		{ 	width: '100%',
			minHeight: '100vh',
			display: 'flex',
			flexDirection: 'column',
			margin: '20vh 0',
			gap: 'var(--gap)'
		}
	}>
		<Typography variant='h1' sx={{ lineHeight: '4rem' }} align='center'>
			EcoCycle
		</Typography>
		<Typography variant='h3' sx={{ lineHeight: '4rem' }}  align='center'>
			Earn cash as you give waste a new life
		</Typography>
		<Typography variant='body2' align='justify' sx={{ lineHeight: '2rem' }}>
			EcoCycle is a waste recycling-focused service which seeks to harmonise, reward, and empower actors
			involved in waste recycling and climate change mitigation. Waste to EcoCycle includes empty cans,
			plastics, spoilt or degraded electronics of any kind, and other materials deemed unwanted by their owner
			but potentially having a new life after repairs or recycling. The adverse effects of climate change are
			felt today in every continent, including Africa, contributing only about 4% to global greenhouse gas
			emissions (<a href="https://blogs.worldbank.org/africacan/cop27-african-cop-and-risk-global-u-turn-paris-agreement" rel='noopener noreferrer' target='_blank'>World Bank Blog</a>,
			accessed 2nd December 2022). Hence, the need to ensure that actions to mitigate climate change are practical
			 and drive sustainable development and economic growth.
		</Typography>
		<Typography variant='body2' align='justify' sx={{ lineHeight: '2rem' }}>
			The EcoCycle value chain has two significant actors: the collectors and the processors.
		 	The collectors (individuals) gather recyclable wastes and deliver these wastes to the
		  	appropriate waste processor. The processors (usually businesses) receive recyclable
		   	waste materials from the collectors and convert these materials into valuable items
		    sold as products. As collectors and processors interact, they are rewarded using Ecotokens
			for contributing to the sustainable development of their communities. All those who participate
			in the EcoCycle system are known as <b>EcoChampions</b>.
		</Typography>
		<Typography variant='body2' align='justify' sx={{ lineHeight: '2rem' }}>
			For collectors to receive their EcoToken reward, they must make or receive payment for their
			services through EcoCycle as USDT, BUSD, DAI, or USDC. Likewise, for the processors to receive
			their EcoToken reward, they must make or receive payments through EcoCycle. Furthermore, the
			processors can list their products (EcoProduct) derived from recycling or refurbishing waste
			items on EcoCycle for purchase.
		</Typography>
		<Typography variant='body2' align='justify' sx={{ lineHeight: '2rem' }}>
			Using crypto stablecoins helps the processors, collectors and other Ecochampions hedge against
			inflation as in Africa, a good number of countries have double-digit inflation
			(<a href='https://www.statista.com/statistics/1220801/inflation-rate-in-africa-by-country/' rel='noopener noreferrer' target='_blank'>Statista</a>, accessed 2nd December 2022).
		</Typography>
		<Typography variant='body2' align='justify' sx={{ lineHeight: '2rem' }}>
			EcoTokens earned by EcoChampions can be exchanged for discounts (<b>EcoDiscount</b>), tax credits
			(<b>EcoTaxCredit</b>), and eco-friendly item redemption (<b>EcoRedeem</b>).
		</Typography>
		<Box sx={{ display: 'flex', alignItems: 'center', gap: 'var(--gap)' }} id='eco-discount'>
			<ShoppingCartCheckout />
			<Typography variant='h3' sx={{ lineHeight: '4rem' }}>
				EcoDiscount
			</Typography>
		</Box>
		<Typography variant='body2' align='justify' sx={{ lineHeight: '2rem' }}>
			With EcoDiscount, EcoChampions can apply their tokens on an EcoProduct purchase and get discounted
			prices for the product.
		</Typography>
		<Box sx={{ display: 'flex', alignItems: 'center', gap: 'var(--gap)' }} id='eco-tax-credit'>
			<ConfirmationNumber />
			<Typography variant='h3' sx={{ lineHeight: '4rem' }}>
				EcoTaxCredit
			</Typography>
		</Box>
		<Typography variant='body2' align='justify' sx={{ lineHeight: '2rem' }}>
			Businesses can trade their earned tokens for tax credits. To get an EcoTaxCredit, only earned
			EcoTokens can be burned to qualify for a tax credit. Burning only earned tokens is to mitigate
			scenarios where businesses buy up EcoTokens without contributing to climate change mitigation
			to qualify for a tax credit. EcoTaxCredit will be viable in partnership with the Revenue
			Services in African countries.
		</Typography>
		<Box sx={{ display: 'flex', alignItems: 'center', gap: 'var(--gap)' }} id='eco-redeem'>
			<Redeem />
			<Typography variant='h3' sx={{ lineHeight: '4rem' }}>
			EcoRedeem
			</Typography>
		</Box>
		<Typography variant='body2' align='justify' sx={{ lineHeight: '2rem' }}>
			With EcoRedeem, EcoTokens can be swapped for low-value eco-friendly products at designated
			EcoChampion stores. These products could include mugs, degradable cups, and mobile recharge cards.
		</Typography>
		<Box sx={{ display: 'flex', alignItems: 'center', gap: 'var(--gap)' }} id='cop27'>
			<Public />
			<Typography variant='h3' sx={{ lineHeight: '4rem' }}>
				EcoCycle &amp; 27th United Nations Climate Change conference (COP27)
			</Typography>
		</Box>
		<Typography variant='body2' align='justify' sx={{ lineHeight: '2rem' }}>
			As countries in Africa call for more funds to meet climate targets for the continent, COP27
			reveals the dilemma of deciding which countries qualify for the compensation
			(<a href='https://www.weforum.org/agenda/2022/11/explainer-who-will-pay-for-climate-loss-and-damage' rel='noopener noreferrer' target='_blank'>WeForum</a>, accessed 2nd
			December 2022). Furthermore, these compensations for climate change which are expected to be paid by
			wealthy nations whose historic emissions have fuelled climate change, need to be channelled towards
			the sustainable development of the fund&apos;s recipient nation. Therefore, EcoCycle positions its service
			as one which could aid in deciding which countries qualify for the compensation and also aid in tracking
			the impact of the received funds. Unarguably, every country which gets the climate change compensation
			fund should also use those funds to mitigate climate change. Furthermore, EcoCycle tracks eco-friendly
			activities hence the ability to provide valuable data that helps in making appropriate decisions regarding
			disbursing the climate change compensation fund.
		</Typography>
		<Box sx={{ display: 'flex', alignItems: 'center', gap: 'var(--gap)' }} id='cop27'>
			<LightbulbOutlined />
			<Typography variant='h3' sx={{ lineHeight: '4rem' }} id='eco-tax-credit'>
				EcoCycle&apos;s Solution to COP27 Question
			</Typography>
		</Box>
		<Typography variant='body2' align='justify' sx={{ lineHeight: '2rem' }}>
			The climate compensation funds could be paid in tranches, and as more activities addressing climate change
			in the recipient country are observed, the United Nations would release more funds. Using EcoCycle, all
			eco-friendly activities are tracked on the blockchain, which helps to give a source of truth regarding
			eco-friendly activities in any country in Africa. The EcoTaxCredit system reveals how businesses in a
			country are committed to mitigating the effect of climate change and how committed the country
			government in which those businesses reside in are willing to incentivise them, thereby boosting
			the nation&apos;s economic prospects. Action against climate change must also yield economic benefits to the
			citizens of the nation; otherwise, the same citizens sabotage their governments&apos; efforts.
		</Typography>
	</Box>;
};