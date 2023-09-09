import { server } from './server/server';

server.listen(process.env.PORT || 3333, () => {
	console.log(`Server is up! on port: ${process.env.PORT || 4000}`);
});
