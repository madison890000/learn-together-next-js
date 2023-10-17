import {IDemo} from "@/types";
import Link from 'next/link'

/**
 * should place all demos here
 */
const DEMOS = [
  {title: 'Example Demo(to home)', route: '/'},
  {title: 'useEffect Demo', route: '/react-demos/use-effect'}
] as IDemo[];

export default function ReactDemos() {

  return (
    <div className="bg-slate-50 min-h-screen">
      <h3 className="text-2xl text-center">React Demos</h3>
      <div>
        <ul>
          {DEMOS.map(demo => (
            <li key={demo.route}>
              <Link className="text-blue-700 prose prose-a hover:prose-a:text-blue-500 hover:underline"
                    href={demo.route}>
                {demo.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}