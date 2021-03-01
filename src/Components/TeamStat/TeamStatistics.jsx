import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWaveAlt, faUsers } from "@fortawesome/free-solid-svg-icons";

const TeamStatistics = ({ chosenplayer }) => {
    let totalSalary = 0;

    chosenplayer.forEach(player => (totalSalary = totalSalary + player.salary));
    return (
        <div style={{ marginBottom: "20px" }} className="sticky-top">
            <Card>
                <Card.Body style={{ textAlign: "center" }}>
                    <h3>
                        Your Team Statistics <FontAwesomeIcon icon={faUsers} />{" "}
                    </h3>
                    <br />
                    <h4>You have Chosen {chosenplayer.length} players</h4>
                    <br />
                    <span>
                        Total Budget{" "}
                        <FontAwesomeIcon icon={faMoneyBillWaveAlt} /> :{" "}
                        {totalSalary} $
                    </span>
                    <br />
                    <ListGroup>
                        <br />
                        <h2 style={{ color: "blue" }}>Chosen Players Are:</h2>
                        {chosenplayer.map(player => (
                            <ListGroup.Item key={player.id}>
                                {player.name} --- {player.salary} $
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TeamStatistics;
