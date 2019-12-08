import { DataResponse } from '../../interfaces/Weather';

const data: DataResponse = {
  "city": {
    "id": 5913695,
    "name": "Cambridge",
    "coord": {
      "lon": -80.3105,
      "lat": 43.3853
    },
    "country": "CA",
    "population": 120372,
    "timezone": -18000
  },
  "cod": "200",
  "message": 2.7650384,
  "cnt": 5,
  "list": [
    {
      "dt": 1575824400,
      "sunrise": 1575808863,
      "sunset": 1575841524,
      "temp": {
        "day": 279.36,
        "min": 277.76,
        "max": 279.36,
        "night": 277.76,
        "eve": 278.87,
        "morn": 277.96
      },
      "pressure": 1016,
      "humidity": 80,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "speed": 8.22,
      "deg": 203,
      "clouds": 100,
      "rain": 1.38
    },
    {
      "dt": 1575910800,
      "sunrise": 1575895318,
      "sunset": 1575927920,
      "temp": {
        "day": 276.72,
        "min": 276.43,
        "max": 279.64,
        "night": 279.45,
        "eve": 278.49,
        "morn": 276.43
      },
      "pressure": 1003,
      "humidity": 98,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "speed": 4.68,
      "deg": 172,
      "clouds": 100,
      "rain": 9.13
    },
    {
      "dt": 1575997200,
      "sunrise": 1575981772,
      "sunset": 1576014320,
      "temp": {
        "day": 269.81,
        "min": 268.39,
        "max": 270.74,
        "night": 268.39,
        "eve": 268.82,
        "morn": 270.74
      },
      "pressure": 1015,
      "humidity": 71,
      "weather": [
        {
          "id": 600,
          "main": "Snow",
          "description": "light snow",
          "icon": "13d"
        }
      ],
      "speed": 7.58,
      "deg": 291,
      "clouds": 100,
    },
    {
      "dt": 1576083600,
      "sunrise": 1576068223,
      "sunset": 1576100722,
      "temp": {
        "day": 267.3,
        "min": 264.9,
        "max": 267.3,
        "night": 264.9,
        "eve": 264.97,
        "morn": 266.98
      },
      "pressure": 1024,
      "humidity": 52,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "speed": 9.82,
      "deg": 270,
      "clouds": 97
    },
    {
      "dt": 1576170000,
      "sunrise": 1576154673,
      "sunset": 1576187126,
      "temp": {
        "day": 268.37,
        "min": 264.75,
        "max": 270.63,
        "night": 270.63,
        "eve": 269.14,
        "morn": 264.75
      },
      "pressure": 1040,
      "humidity": 50,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "speed": 3.85,
      "deg": 172,
      "clouds": 34
    }
  ]
}

export default data;
