import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Paper, Divider } from '@material-ui/core';


const Wrapper = styled.div`
  .paperCard {
    border-radius: 10px;
    box-shadow: none;
    padding: 2rem;
    cursor: pointer;
    &:hover{
      transform: scale(.95);
      transition: .3s;
    }
  }
  .MuiDivider-root{
    margin: 1rem 0;
    border: -0.5px solid ${props => props.theme.color.text_05};
  }
  .pinkCard{
    background: rgba(243, 121, 32, 0.02);
    border: 1px solid ${props => props.theme.color.ui_08};
  }
  .blueCard{
    background: rgba(46, 196, 182, 0.02);
    border: 1px solid ${props => props.theme.color.brand_02};
  }
  .orangeCard{
    background: rgba(255, 198, 36, 0.02);
border: 1px solid ${props => props.theme.color.ui_11};
  }
  .greenCard{
    background: rgba(158, 205, 67, 0.02);
border: 1px solid ${props => props.theme.color.text_11};
  }
  .purpleCard{
    background: rgba(73, 79, 177, 0.02);
border: 1px solid ${props => props.theme.color.text_12};
  }
 .subHeading{
  justify-content:start;
     p{
           padding-left: .8rem;
        font-weight: bold;
        font-size: 2rem;
        line-height: 2rem;
               letter-spacing: 0.2px;
               color: ${props => props.theme.color.ui_05};
     }
 }
 .grid{
     display: grid;
     grid-template-columns: 1fr 1fr;
}
 }
 .detail{
     .info{
        font-size: 1.3rem;
        line-height: 2.5rem;
        letter-spacing: 0.2px;
              color: ${props => props.theme.color.ui_05};
                  padding-bottom: 3rem;
     }
 }
 .grid{
     .bold{
        font-weight: bold;
        font-size: 1.1rem;
        line-height: 1.1rem;
        letter-spacing: 0.2px;
        text-transform: uppercase;
                color: ${props => props.theme.color.ui_06};
                padding-bottom: 1rem;
     }
     .date{
        font-size: 1.4rem;
        line-height: 1.3rem;
               letter-spacing: 0.2px;
        color: ${props => props.theme.color.ui_05};
     }
 }
`;

function AppointReward({cardTheme, icon}) {
	return (
		<Wrapper>
			<Paper className={`paperCard ${cardTheme}`} >
				<div>
					<div className="subHeading flex">
						<img src={icon} alt="icon"/>
						<p>Reward Title</p>
					</div>
					<Divider/>
					<div className="detail">
						<p className="info">
               Empowering you with the knowledge and loren opportunity to live the best life possible.
						</p>
						<div className="sub-info">
							<div className="grid">
								<div><p className='bold'>Start Date </p> <p className='date'>Feb 24, 2019</p></div>
								<div><p className='bold'>End Date</p> <p className='date'>June 09, 2019</p></div>
							</div>
						</div>
					</div>
				</div>
			</Paper>
		</Wrapper>
	);
}

AppointReward.propTypes = {
  cardTheme: PropTypes.string,
  icon: PropTypes.any,
}

export default AppointReward;