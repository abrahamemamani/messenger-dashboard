import styled from 'styled-components';
import {
	border, BorderProps, color, ColorProps,
	compose, flexbox, FlexboxProps, layout,
	LayoutProps, position, PositionProps, shadow,
	ShadowProps, space, SpaceProps, typography, TypographyProps
} from 'styled-system';

export type tDivProps = (
	BorderProps & ColorProps & FlexboxProps
	& LayoutProps & PositionProps
	& ShadowProps & SpaceProps & TypographyProps
);

export const Div = styled('div')<tDivProps>(
	compose(border, space, layout, typography, color, position, shadow, flexbox)
);

export const Flex = styled(Div)`
	display: flex;
`;

export const FlexInline = styled(Div)`
	display: inline-flex;
`;

export const Span = styled('span')<tDivProps>(
	compose(border, space, layout, typography, color, position, shadow, flexbox)
);