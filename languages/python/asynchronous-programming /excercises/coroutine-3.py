#with task 

import asyncio 

async def  greet(name,delay):
    await asyncio.sleep(delay)
    print(f"Welcome {name} and excuted after {delay}seconds")



async def main():
    task1 = asyncio.create_task(greet("Mark",10))
    task2 = asyncio.create_task(greet("Spencer",5))

    await task1
    await task2

if __name__ == "__main__":
    asyncio.run(main())