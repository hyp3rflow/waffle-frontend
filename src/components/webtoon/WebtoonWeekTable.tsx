import React from 'react';
import { css } from 'styled-components';

import PageTemplate from 'components/base/BlockLayout';
import BackgroundTemplate from 'components/base/BackgroundTemplate';

import WebtoonWeekCurationItem from './WebtoonWeekCurationItem';
import WeekdayButtons from './WeekdayButtons';

const WebtoonWeekTable: React.FC = () => {
  return (
    <BackgroundTemplate backgroundColor="white">
      <PageTemplate>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            padding: 3rem 0;
          `}
        >
          <WeekdayButtons
            css={css`
              margin: 0 auto;
              margin-bottom: 3rem;
            `}
          />
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              gap: 1rem;
            `}
          >
            <WebtoonWeekCurationItem />
            <WebtoonWeekCurationItem />
            <WebtoonWeekCurationItem />
            <WebtoonWeekCurationItem />
            <WebtoonWeekCurationItem />
            <WebtoonWeekCurationItem />
            <WebtoonWeekCurationItem />
            <WebtoonWeekCurationItem />
            <WebtoonWeekCurationItem />
          </div>
        </div>
      </PageTemplate>
    </BackgroundTemplate>
  );
};

export default WebtoonWeekTable;
