INSERT INTO USERS(username, keyword) VALUES('admin', crypt('abc123.', gen_salt('bf')))

INSERT INTO GEO_LOCATION(nameLocation, coords) VALUES('Santiago de Compostela', 'Latitud: 42.8804, Longitud: -8.5463 42° 52′ 49″ Norte, 8° 32′ 47″ Oeste')

INSERT INTO POST(postDate, postText, username, idLocation) VALUES('2022-05-30', 'Mi primerito post', 'admin', 1)