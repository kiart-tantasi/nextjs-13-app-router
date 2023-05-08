clean:
	rm -r .next && rm next-env.d.ts

server:
	make clean && npm run build && npm run start

cleandev:
	make clean && npm run dev
