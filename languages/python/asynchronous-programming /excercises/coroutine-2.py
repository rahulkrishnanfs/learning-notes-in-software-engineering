# With gather 

import asyncio

async def coroutine1():
    print("Coroutine 1 Started")
    await asyncio.sleep(10)
    print("Coroutine 1 finsihed")



async def coroutine2():
    print("Coroutine 2 Started")
    await asyncio.sleep(5)
    print("Coroutine 2 finsihed")


async def coroutine3():
    print("Coroutine 3 Started")
    await asyncio.sleep(3)
    print("Coroutine 3 finsihed")

async def main():
    await asyncio.gather(
        coroutine1(),
        coroutine2(),
        coroutine3()
        )

if __name__=="__main__":
    asyncio.run(main())
