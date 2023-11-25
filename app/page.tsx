import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			<h1 className="text-4xl font-bold"> aknet.tech / www.aknet.tech </h1>
			<div className="grid grid-cols-2 h-full gap-4 py-10">
				<Link href="https://me.aknet.tech/" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
						私について知る（もっと）
					</h5>
					<p className="font-normal text-gray-700 ">
						私のいろいろな情報がここにはあります
					</p>
				</Link>
				<Link href="https://links.aknet.tech/" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
						SNSとかのリンクだけほしい
					</h5>
					<p className="font-normal text-gray-700 ">
						であればこちらへどうぞ
					</p>
				</Link>
			</div>
		</main>
	)
}
