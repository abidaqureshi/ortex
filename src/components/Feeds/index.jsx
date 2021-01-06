import React, { useEffect, useState, useReducer } from 'react';
import { Descriptions, Row, Col } from 'antd';
import { WEB_SOCKET_URL } from '../../constants';
import initialState from '../../reducer/initialState';
import feedReducer from '../../reducer';

const Feeds = () => {
  const [feeds, dispatch] = useReducer(feedReducer, initialState);
  const [webSocket, setWebSocket] = useState(null);

  useEffect(() => {
    const subscribe = {
      topic: 'subscribe',
      to: 'EURUSD:CUR',
    };

    const ws = new WebSocket(WEB_SOCKET_URL);

    ws.onopen = () => {
      ws.send(JSON.stringify(subscribe));
    };
    ws.onmessage = event => {
      const response = JSON.parse(event.data);
      const { dt, price } = response;
      dispatch({ type: 'FEED_UPDATE', payload: { timeStamp: dt, amount: price } });
    };
    ws.onclose = () => {
      ws.close();
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className="offset-3">
      <Row>
       
        <Col span={24}>
          <Descriptions size='small'>
            <Descriptions.Item label='Time'>{feeds.timeStamp ? new Date(feeds.timeStamp).getTime() : 'Loading...'}</Descriptions.Item>
            <Descriptions.Item label='Price'>{feeds.amount}</Descriptions.Item>
          </Descriptions>
        </Col>
       
      </Row>
    </div>
  );
};

export default Feeds;
