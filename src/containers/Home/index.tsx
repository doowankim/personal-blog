import React from 'react';
import * as Styled from './styles';
import { useHistory } from 'react-router';
import { Card } from '../../components';

const Home = () => {
	const history = useHistory();
	return (
		<div>
			<Styled.Wrapper>
				<Styled.WriteText onClick={() => history.push('/board')}>
					글쓰기
				</Styled.WriteText>
				<Styled.TagBox>
					<Styled.Tag all>All</Styled.Tag>
					<Styled.Tag>tag</Styled.Tag>
					<Styled.Tag>tag</Styled.Tag>
					<Styled.Tag>tag</Styled.Tag>
					<Styled.Tag>tag</Styled.Tag>
					<Styled.Tag>tag</Styled.Tag>
					<Styled.Tag>tag</Styled.Tag>
					<Styled.Tag>tag</Styled.Tag>
					<Styled.Tag>tag</Styled.Tag>
					<Styled.Tag>tag</Styled.Tag>
					<Styled.Tag>tag</Styled.Tag>
					<Styled.Tag>tag</Styled.Tag>
					<Styled.Tag>tag</Styled.Tag>
				</Styled.TagBox>
				{data.map((d: any, index: number) => (
					<React.Fragment key={index}>
						<Card title={d.title} description={d.description} />
					</React.Fragment>
				))}
			</Styled.Wrapper>
		</div>
	);
};

const data = [
	{
		type: 0,
		title: '타이틀입니다',
		description:
			'경기 성남시에서 신종 코로나바이러스 감염증(코로나19) 확진 판정을 받은 직후 휴대폰 전원을 끄고 잠적했던 30대 남성 A씨가 3일만에 방역당국에 자수했다.' +
			'9일 성남시에 따르면 지난 6일 방역당국으로부터 확진 통보를 받은 직후 잠적했던 A씨가 이날 오후 2시30분쯤 휴대폰을 켜고 방역당국에 전화를 걸어 수정구의 한 모텔에 있다고 자신의 위치를 알렸다.' +
			'방역 관계자는 "A씨는 통화에서 수정구보건소 임시선별검사소에서 진단검사를 받고 8일 확진 판정을 받은 B씨와 같이 있다고 밝혔다고 했다.' +
			'heyhyehyeheyeuueueudjdjdj',
	},
	{
		type: 0,
		title: '타이틀입니다',
		description:
			'경기 성남시에서 신종 코로나바이러스 감염증(코로나19) 확진 판정을 받은 직후 휴대폰 전원을 끄고 잠적했던 30대 남성 A씨가 3일만에 방역당국에 자수했다.' +
			'9일 성남시에 따르면 지난 6일 방역당국으로부터 확진 통보를 받은 직후 잠적했던 A씨가 이날 오후 2시30분쯤 휴대폰을 켜고 방역당국에 전화를 걸어 수정구의 한 모텔에 있다고 자신의 위치를 알렸다.' +
			'방역 관계자는 "A씨는 통화에서 수정구보건소 임시선별검사소에서 진단검사를 받고 8일 확진 판정을 받은 B씨와 같이 있다고 밝혔다고 했다.',
	},
	{
		type: 0,
		title: '타이틀입니다',
		description:
			'경기 성남시에서 신종 코로나바이러스 감염증(코로나19) 확진 판정을 받은 직후 휴대폰 전원을 끄고 잠적했던 30대 남성 A씨가 3일만에 방역당국에 자수했다.' +
			'9일 성남시에 따르면 지난 6일 방역당국으로부터 확진 통보를 받은 직후 잠적했던 A씨가 이날 오후 2시30분쯤 휴대폰을 켜고 방역당국에 전화를 걸어 수정구의 한 모텔에 있다고 자신의 위치를 알렸다.' +
			'방역 관계자는 "A씨는 통화에서 수정구보건소 임시선별검사소에서 진단검사를 받고 8일 확진 판정을 받은 B씨와 같이 있다고 밝혔다고 했다.',
	},
	{
		type: 1,
		title: '타이틀입니다',
		description:
			'경기 성남시에서 신종 코로나바이러스 감염증(코로나19) 확진 판정을 받은 직후 휴대폰 전원을 끄고 잠적했던 30대 남성 A씨가 3일만에 방역당국에 자수했다.' +
			'9일 성남시에 따르면 지난 6일 방역당국으로부터 확진 통보를 받은 직후 잠적했던 A씨가 이날 오후 2시30분쯤 휴대폰을 켜고 방역당국에 전화를 걸어 수정구의 한 모텔에 있다고 자신의 위치를 알렸다.' +
			'방역 관계자는 "A씨는 통화에서 수정구보건소 임시선별검사소에서 진단검사를 받고 8일 확진 판정을 받은 B씨와 같이 있다고 밝혔다고 했다.',
	},
];

export default Home;
