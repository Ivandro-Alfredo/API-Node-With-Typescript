import { server } from './server/server';


server.listen(process.env.PORT || 4000, () => {
	console.log(`Server is up! it's running on port: ${process.env.PORT || 4000}`);
});
