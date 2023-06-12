"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ListOfProblems from "../dummy/index";
export default function Home() {
  const { push } = useRouter();
  const [problems, setProblems] = useState([]);
  useEffect(() => {
    let fetchProblems = ListOfProblems;
    fetchProblems.map((p) => {
      p.id, p.name;
    });
    setProblems(() => fetchProblems);
  }, []);

  const showProblemHandler = (e) => {
    push(`http://localhost:3000/problem/${e.target.id}/`);
  };
  return (
    <main>
      <ol type="1">
        {problems.map((p) => {
          return (
            <li key={p.id}>
              {
                <div className="mb-3" id={p.id} onClick={showProblemHandler}>
                  {p.name}
                </div>
              }
            </li>
          );
        })}
      </ol>
    </main>
  );
}
