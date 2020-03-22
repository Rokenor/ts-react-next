import React from 'react';

interface WeatherProps {
  temperature: number;
  scale: 'C' | 'F'
}

interface Props extends WeatherProps {
  theme: 'yellow' | 'green'
}

export const Weather: React.FunctionComponent<Props> = ({ temperature, scale }) => {
  return (
    <div>
      The temperature is {temperature} {scale}
    </div>
  );
};

interface WithWeatherProps {
  children(props: WeatherProps) : JSX.Element;
}

export const WithWeatherProps: React.FunctionComponent<
  WithWeatherProps
> = ({ children }) => {
  const props: WeatherProps = {
    temperature: 10,
    scale: 'F'
  }
  return children(props);
};