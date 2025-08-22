import {Button} from "@/components/ui/button";
import {FaGithub} from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaLinkedin, FaVuejs, FaDocker, FaGitlab} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import Link from "next/link";
import {Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

export default function About() {
    return (
        <div className="max-w-3xl mx-auto">
            <div className="px-4 py-8 mt-4 flex flex-col gap-1">
                <p className="text-2xl py-4 font-bold">About</p>
                <p>안녕하세요 개발자로 일하고 있는 이현준 입니다.</p>
                <p>생각나면 끄적이거나 정리하는 것을 좋아하며, 항상 Why를 많이 생각하는 개발자 입니다.</p>
                <div className="flex gap-2">
                    <Button variant="outline" size='icon' className="size-9">
                        <Link href={'https://github.com/joonda'} target={'_blank'}>
                            <FaGithub />
                        </Link>
                    </Button>
                    <Button variant="outline" size='icon' className="size-9">
                        <Link href={'https://www.linkedin.com/in/hjleeeee/'} target={'_blank'}>
                            <FaLinkedin />
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="p-4 flex flex-col gap-1">
                <p className="text-2xl py-4 font-bold">Work Experience</p>
                <Card className="w-full">
                    <CardHeader className="flex justify-between">
                        <div className="flex flex-col gap-1">
                            <CardTitle className="text-lg">하이온넷</CardTitle>
                            <CardDescription>
                                VPN, 해외전용회선, 네트워크 관제, 코로케이션 등의 인프라 서비스를 제공하는 네트워크 전문 기업
                            </CardDescription>
                        </div>
                        <CardDescription>2025.03. -</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-1">
                        <CardTitle className="text-lg">Backend Engineer</CardTitle>
                        <CardDescription>
                            <ul role="list" className="px-4 list-disc marker:text-gray-400 flex flex-col gap-1">
                                <li>사내 ERP 프로그램 개발</li>
                                <li>입고, 출고, 입금, 출금 등 전반적 프로세스 구현</li>
                                <li>사용자 중심의 화면 설계로 업무 효율성 개선</li>
                                <li>ERP 구조 이해 및 개발 전 과정 참여</li>
                            </ul>
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-2">
                        <Badge><SiSpringboot /> Spring Framework</Badge>
                        <Badge><GrMysql /> MySQL</Badge>
                        <Badge><FaVuejs /> Vue.js</Badge>
                        <Badge><BiLogoTypescript /> TypeScript</Badge>
                        <Badge><FaDocker /> Docker</Badge>
                        <Badge><FaGithub /> Github</Badge>
                    </CardFooter>
                </Card>
            </div>
            <div className="p-4 flex flex-col gap-1">
                <p className="text-2xl py-4 font-bold">Project</p>
                <div className="grid grid-cols-2 gap-2">
                    <Card className="w-full">
                        <CardHeader className="flex flex-col gap-2">
                            <CardTitle>명지전문대학 학사 도우미 명전이</CardTitle>
                            <CardDescription>
                                2024.09. - 2024.12.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">
                            <CardTitle>Frontend Engineer</CardTitle>
                            <CardDescription>
                                <ul role="list" className="px-4 list-disc marker:text-gray-400 flex flex-col gap-1">
                                    <li>명지전문대학 AI 학사 챗봇</li>
                                    <li>메인페이지, 채팅방 화면 구현</li>
                                    <li>
                                        <div className="flex gap-1">
                                            <Link href={"https://www.youtube.com/watch?v=QY4TRNM3Rh0"}
                                                  target="_blank"
                                                  className="underline decoration-1 hover:text-gray-800">
                                                시연 영상
                                            </Link>
                                            <Link href={"https://github.com/Team-Warin/MJC-CHAT"}
                                                  target="_blank"
                                                  className="underline decoration-1 hover:text-gray-800">
                                                Github
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="flex flex-wrap gap-1">
                            <Badge>Next.js</Badge>
                            <Badge>TypeScript</Badge>
                            <Badge>Tailwind</Badge>
                            <Badge>Supabase</Badge>
                        </CardFooter>
                    </Card>
                    <Card className="w-full">
                        <CardHeader className="flex flex-col gap-2">
                            <CardTitle>서울시 고령인구의 사회적 접근성 분석</CardTitle>
                            <CardDescription>
                                2024.09. - 2024.12.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2">
                            <CardTitle>Data Analysis</CardTitle>
                            <CardDescription>
                                <ul role="list" className="px-4 list-disc marker:text-gray-400 flex flex-col gap-1">
                                    <li>서울시 고령인구의 사회적 접근성을 지표를 선정하여 분석</li>
                                    <li>한국컴퓨터정보학회 동계학술대회 우수논문상 수상</li>
                                    <li>
                                        <div className="flex gap-1">
                                            <Link href={"https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12098834"}
                                                  target="_blank"
                                                  className="underline decoration-1 hover:text-gray-800">
                                                논문
                                            </Link>
                                            <Link href={"https://github.com/joonda/find-districts-for-elderly-population"}
                                                  target="_blank"
                                                  className="underline decoration-1 hover:text-gray-800">
                                                Github
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </CardDescription>
                        </CardContent>
                        <CardFooter className="flex flex-wrap gap-1">
                            <Badge>Python</Badge>
                            <Badge>Jupyter Notebook</Badge>
                            <Badge>Matplotlib</Badge>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <div className="p-4 flex flex-col gap-2">
                <p className="text-2xl py-4 font-bold">Education</p>
                <Card className="w-full">
                    <CardHeader className="flex justify-between">
                        <div className="flex flex-col gap-1">
                            <CardTitle className="text-lg">명지전문대학</CardTitle>
                            <CardDescription>
                                AI•빅데이터 전문학사 (3.84 / 4.5)
                            </CardDescription>
                        </div>
                        <CardDescription>2024.03. - 2025.09.</CardDescription>
                    </CardHeader>
                </Card>
                <Card className="w-full">
                    <CardHeader className="flex justify-between">
                        <div className="flex flex-col gap-1">
                            <CardTitle className="text-lg">LG Aimers</CardTitle>
                            <CardDescription>
                                Data Education
                            </CardDescription>
                        </div>
                        <CardDescription>
                            2024.07. - 2024.08.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2">
                        <CardDescription>
                            <ul role="list" className="px-4 list-disc marker:text-gray-400 flex flex-col gap-1">
                                <li>제품 이상 여부 판별 프로젝트</li>
                                <li>LG 기업의 실제 데이터를 기반으로 제품 이상 여부 판별 AI 모델 제작</li>
                                <li>전체 740개 팀 중 198등 기록 (상위 26%)</li>
                                <li>
                                    <Link href={""}
                                          target="_blank"
                                          className="underline decoration-1 hover:text-gray-800">
                                        수료증
                                    </Link>
                                </li>
                            </ul>
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-1">
                        <Badge>Python</Badge>
                        <Badge>Tensorflow</Badge>
                    </CardFooter>
                </Card>
                <Card className="w-full">
                    <CardHeader className="flex justify-between">
                        <div className="flex flex-col gap-1">
                            <CardTitle className="text-lg">가톨릭대학교 의과대학 의료정보학교실 BIDA-LAB</CardTitle>
                            <CardDescription>
                                Data Intern
                            </CardDescription>
                        </div>
                        <CardDescription>
                            2023.12. - 2024.02.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-2">
                        <CardDescription>
                            <ul role="list" className="px-4 list-disc marker:text-gray-400 flex flex-col gap-1">
                                <li>의료 데이터 Docker 적재 및 매뉴얼 작성</li>
                                <li>Python을 이용한 데이터 전처리</li>
                                <li>
                                    <Link href={""}
                                          target="_blank"
                                          className="underline decoration-1 hover:text-gray-800">
                                        수료증
                                    </Link>
                                </li>
                            </ul>
                        </CardDescription>
                    </CardContent>
                    <CardFooter className="flex flex-wrap gap-1">
                        <Badge>Python</Badge>
                        <Badge>Docker</Badge>
                    </CardFooter>
                </Card>
                <Card className="w-full">
                    <CardHeader className="flex justify-between">
                        <div className="flex flex-col gap-1">
                            <CardTitle className="text-lg">동아방송예술대학</CardTitle>
                            <CardDescription>
                                방숭기술계열•제작전공 전문학사 (3.81 / 4.5)
                            </CardDescription>
                        </div>
                        <CardDescription>2014.03. - 2019.02.</CardDescription>
                    </CardHeader>
                </Card>
            </div>
            <div className="p-4 flex flex-col gap-1">
                <p className="text-2xl py-4 font-bold">Certificates</p>
                <Card className="w-full">
                    <CardHeader className="flex justify-between">
                        <div className="flex flex-col gap-1">
                            <CardTitle className="text-lg">정보처리산업기사</CardTitle>
                            <CardDescription>
                                한국산업인력공단
                            </CardDescription>
                        </div>
                        <CardDescription>2025.06.</CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}