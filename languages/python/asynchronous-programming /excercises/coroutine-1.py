import asyncio

async def coroutine():
    print("Coroutine Started")
    await asyncio.sleep(10)
    print("Coroutine finsihed")


async def main():
    print("Main Started")
    await coroutine()
    print("Main Finished")


def print_number():
    for i in range(10):
        print(i)

if __name__ == "__main__":
    asyncio.run(main())
    print_number()